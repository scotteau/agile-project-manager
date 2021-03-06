import React from "react";
import "./Tooltip.css";
import { connect } from "react-redux";
import { changeNewTaskDisplay } from "../../actions/index";



const Tooltip = ({ changeNewTaskDisplay }) => {

  return (
    <div className={"tooltip"}>
      <div className="tooltip__content">
        <ul>
          <li onClick={()=>{changeNewTaskDisplay(true)}}>
            <span className={"material-icons"}>check_circle_outline</span>
            <span>Task</span>
          </li>
          <li>
            <span className={"material-icons"}>list_alt</span>
            <span>Project</span>
          </li>

          <li>
            <span className={"material-icons"}>person_add</span>
            <span>Invite</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    newTaskDisplay: state.taskDisplay.newTaskDisplay,
  };
}

export default connect(mapStateToProps, { changeNewTaskDisplay })(Tooltip);
