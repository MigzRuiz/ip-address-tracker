import React from "react";
import OutputItem from "../output-item/output-item.component";
import "./output-box.style.scss";

const OutputBox = ({ data }) => (
  <div className="output-wrapper">
    <OutputItem label="IP Address" output={data.ip} />
    <OutputItem label="Location" output={data.location} />
    <OutputItem label="Timezone" output={data.timezone} />
    <OutputItem label="ISP" output={data.isp} />
  </div>
);

export default OutputBox;
