import React from "react";
import "./index.css";

const ReactAccessibilityLabel = ({ text }) => {
  return (<span className="hidden" aria-label={text}>{text}</span>);
};

export default ReactAccessibilityLabel;
