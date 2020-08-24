import React from "react";
const TaskList = (props) => {
  return props.activities.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`,
      taskStatus = `taskStatus-${idx}`;
    return (
      <tr key={val.index}>
        <td>
          <input
            type="text"
            name="projectName"
            data-id={idx}
            id={projectName}
            className="form-control "
            onChange={props.onChange}
          />
        </td>

        {/* <td>
          <input
            type="text"
            name="task"
            id={task}
            data-id={idx}
            className="form-control "
          />
    
        {/* <td>
          <select
            name="taskStatus"
            id={taskStatus}
            data-id={idx}
            className="form-control"
          >
            <option value="pending">Pending</option>
            <option value="In Progress">In progress</option>
            <option value="Completed">Completed</option>
            <option value="Hold">Hold</option>
          </select>
        </td> */}
        <td>
          {/* <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <FaPlus></FaPlus>
              <i className="fa Faplus" aria-hidden="true"></i>
            </button> */}
        </td>
      </tr>
    );
  });
};
export default TaskList;
