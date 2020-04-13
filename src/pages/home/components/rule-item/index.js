import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const RuleItem = (props) => {
  const openDetails = () => props.openDetails(props);
  return (
    <div id="rule-item-main-content">
      <div id="rule-item-text-content" onClick={openDetails}>
        <div id="rule-item-title">
          <p>{`${props.index} - ${props.title}`}</p>
        </div>
        <div id="rule-item-description">
          <p>{props.description}</p>
        </div>
      </div>
      <div id="rule-item-action-area">
        <button>
          <FontAwesomeIcon
            id="rule-item-arrow-down"
            icon={faArrowDown}
          ></FontAwesomeIcon>
          Vezes {props.timesDesobeyed}
        </button>
        <button>
          <FontAwesomeIcon
            id="rule-item-heart"
            icon={faHeart}
          ></FontAwesomeIcon>
          Vezes {props.timesObeyed}
        </button>
      </div>
    </div>
  );
};
