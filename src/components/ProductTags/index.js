import React from "react";
import Info from "../../Assets/stackline_frontend_assessment_data_2021.json";
import "./style.css";

export default function ProductTags() {
  let tags = [];
  Info.map((data) => (
    tags.push(...data.tags)
  ));

  return (
    <ul>
      {tags.map((tag) => {
        return (
          <li className="tag-icon" key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
