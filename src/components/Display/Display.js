import React from "react";

export const Display = ({ textDisplay }) => {
  return (
    <div className="result" id="result">
      {textDisplay || "0.00"}
    </div>
  );
};
