import React from "react";
import "./output-item.style.scss";

const OutputItem = ({ label, output }) => (
  <div className="item">
    <label className="item__label">{label}</label>
    <div className="item__output">{output}</div>
  </div>
);

export default OutputItem;
