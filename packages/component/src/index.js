import React from "react";

const ReactAccessibilityLabel = ({ text }) => {
  return (<span className="hidden" aria-label={text}>{text}</span>);
};

export default ReactAccessibilityLabel;
