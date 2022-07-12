import React from "react";

function Child({ childColorr, color }) {
  return (
    <div
      className="child"
      style={{ backgroundColor: color }}
      onClick={childColorr}
    />
  );
}

export default Child;
