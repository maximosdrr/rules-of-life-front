import React from "react";
import { RuleItem } from "../components/rule-item/index";

export const RenderRules = (rules_data, openDetails) => {
  const rules = [];
  rules_data.map((item, index) => {
    const openRuleModal = () => openDetails(item);
    return rules.push(
      <RuleItem
        id={item.id}
        openDetails={openRuleModal}
        key={item.id}
        title={item.title}
        index={index + 1}
        description={
          item.description.length >= 100
            ? `${item.description.substring(0, 200)}...`
            : item.description
        }
        timesObeyed={item.times_obeyeds}
        timesDesobeyed={item.times_desobeyeds}
      ></RuleItem>
    );
  });
  return rules;
};
