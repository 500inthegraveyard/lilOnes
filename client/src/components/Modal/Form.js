import React, { useState } from "react";
import TaskList from "./TaskList";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

class Form extends React.Component {
  state = {
    currentActivity: "",
    activities: [],
    activityCount: [],
    note: "",
    date: "",
  };

  handleChange = (e) => {
    // if (["activities", "notes"].includes(e.target.name)) {
    //   let activities = [...this.state.activities];
    //   activities[e.target.dataset.id][e.target.name] = e.target.value;
    // } else {
    this.setState({ currentActivity: e.target.value });
    // }
  };

  addNewRow = (e) => {
    this.setState((prevState) => ({
      activityCount: [...prevState.activityCount, 1],
    }));
    if (this.state.activityCount.length > 0) {
      this.setState((prevState) => ({
        activities: [...prevState.activities, this.state.currentActivity],
        currentActivity: "",
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("CHILD ID: ", this.props);

    const { activities, note, currentActivity } = this.state;
    const activityArray = activities;
    activityArray.push(currentActivity);
    console.log(activityArray.join(", "));

    axios
      .post(`/api/report/${this.props.id}`, {
        activities: activityArray.join(", "),
        note,
      })
      .then((res) => {
        console.log("REPORT SUCCESSFUL");
        console.log(res);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          this.setState({ errors: error });
      });
  };
  clickOnDelete(record) {
    this.setState({
      activities: this.state.activities.filter((r) => r !== record),
    });
  }

  render() {
    let { activityCount } = this.state;
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">
                  Add Your Daily Task
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Activities</th>
                        <th>
                          <button
                            onClick={() => this.addNewRow()}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <FaPlus></FaPlus>
                            <i className="fa Faplus" aria-hidden="true"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskList
                        add={this.addNewRow}
                        delete={this.clickOnDelete.bind(this)}
                        activities={activityCount}
                        onChange={this.handleChange}
                      />
                      <label>Overview: </label>
                      <input
                        type="text"
                        name="note"
                        // id={task}
                        // data-id={idx}
                        className="form-control"
                        placeholder="Enter notes here"
                        onChange={(e) =>
                          this.setState({ note: e.target.value })
                        }
                      />
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-center">
                  <button
                    onClick={this.handleSubmit && this.handleCloseModal}
                    variant="primary"
                    type="submit"
                  >
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
