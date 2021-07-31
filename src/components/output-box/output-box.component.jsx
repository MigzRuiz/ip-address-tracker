import React from "react";
import OutputItem from "../output-item/output-item.component";
import "./output-box.style.scss";

const OutputBox = () => (
  <div className="output-wrapper">
    <OutputItem label="IP Address" output="192.168.174.101" />
    <OutputItem label="Location" output="Brooklyn NY" />
    <OutputItem label="Timezone" output="UTC" />
    <OutputItem label="ISP" output="SpaceX Starlink" />
  </div>
);

export default OutputBox;
