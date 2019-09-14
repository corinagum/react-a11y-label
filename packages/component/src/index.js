import React from "react";

const ReactAccessibilityLabel = ({ text }) => {
  return (
    <span
      aria-label={text}
      style={{
        color: "transparent",
        height: 1,
        left: -10000,
        overflow: "hidden",
        position: "absolute",
        top: 0,
        whiteSpace: "nowrap",
        width: 1
      }}
    >
      {text}
    </span>
  );
};

export default ReactAccessibilityLabel;
