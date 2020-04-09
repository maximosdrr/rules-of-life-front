import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const RuleGroup = (props) => {
  return (
    <div id="rule-group-main-content">
      <p>
        <FontAwesomeIcon
          id="rule-group-main-content-icon"
          icon={faCircle}
        ></FontAwesomeIcon>
        <span id="rule-group-main-content-text">{`${props.title}`}</span>
      </p>
    </div>
  );
};
