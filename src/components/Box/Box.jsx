import React from "react";
import "./Box.css";

const Box = ({ text, color, prevItem, onClick }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={() => onClick(text, prevItem)}
    >
      {text}
    </div>
  );
};

export default Box;
