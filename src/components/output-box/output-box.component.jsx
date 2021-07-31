import React from "react";
import OutputItem from "../output-item/output-item.component";
import "./output-box.style.scss";

const OutputBox = ({ info }) => (
  <div className="output-wrapper">
    <OutputItem label="IP Address" output={info.ip} />
    <OutputItem label="Location" output={info.location} />
    <OutputItem label="Timezone" output={info.timezone} />
    <OutputItem label="ISP" output={info.isp} />
  </div>
);

export default OutputBox;
