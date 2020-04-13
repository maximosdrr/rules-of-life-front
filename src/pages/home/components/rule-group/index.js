import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const RuleGroup = (props) => {
  const changeRoute = () =>
    props.changeRoute(`rules/get_one_groups_of_rules/${props.value}`);
  return (
    <div id="rule-group-main-content" value={props.value} onClick={changeRoute}>
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
