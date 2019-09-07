import React from "react";

const ReactAccessibilityLabel = ({ text }) => {
  return (<span aria-label={text}>{text}</span>);
};

export default ReactAccessibilityLabel;
