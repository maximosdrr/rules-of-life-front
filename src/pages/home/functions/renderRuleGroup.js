import React from "react";
import { RuleGroup } from "../components/rule-group/index";

export const RenderRuleGroup = (group_rules_data) => {
  const groupRules = [];
  group_rules_data.map((item, index) => {
    return groupRules.push(
      <RuleGroup
        key={item.id}
        title={
          item.title.length >= 30
            ? `${item.title.substring(0, 30)}...`
            : item.title
        }
      ></RuleGroup>
    );
  });
  return groupRules;
};
