import React from "react";
import TaskList from "./TaskList";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
class Form extends React.Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        projectName: "",
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ],
    date: "",
    description: "",
  };

  handleChange = (e) => {
    if (
      ["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          projectName: "",
          task: "",
          taskNotes: "",
          taskStatus: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.date === "" || this.state.description === "") {
      //   NotificationManager.warning(
      //     "Please Fill up Required Field . Please check Task and Date Field"
      //   );
      return false;
    }
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].projectName === "" ||
        this.state.taskList[i].task === ""
      ) {
        // NotificationManager.warning(
        //   "Please Fill up Required Field.Please Check Project name And Task Field"
        // );
        return false;
      }
    }
    let data = { formData: this.state, userData: localStorage.getItem("user") };
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    axios
      .post("http://localhost:3000/api/task", data)
      .then((res) => {
        // if (res.data.success) success(res.data.msg);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          //   NotificationManager.error("Bad Request");
          // else NotificationManager.error("Something Went Wrong");
          this.setState({ errors: error });
      });
  };
  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }
  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <div className="content">
        {/* <NotificationContainer /> */}
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">
                  Add Your Daily Task
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="form-group ">
                      <label className="required">Date</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control"
                        placeholder="Enter Date"
                      />
                    </div>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Activities</th>
                        <th className="required">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        taskList={taskList}
                      />
                    </tbody>
                    <tfoot>
                      {/* <tr>
                        <td colSpan="4">
                          <button
                            onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr> */}
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
