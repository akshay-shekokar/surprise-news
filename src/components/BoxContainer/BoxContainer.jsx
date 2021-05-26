import React from "react";
import Box from "../Box/Box";
import "./BoxContainer.css";

const BoxContainer = ({ onFinalClick }) => {
  const boxList = [
    {
      text: 1,
      color: "#dc5450",
      prevItem: null,
    },
    {
      text: 2,
      color: "#bbe17a",
      prevItem: 8,
    },
    {
      text: 3,
      color: "#8397e1",
      prevItem: 7,
    },
    {
      text: 4,
      color: "#9b78aa",
      prevItem: 6,
    },
    {
      text: 5,
      color: "#d5972e",
      prevItem: 2,
    },
    {
      text: 6,
      color: "#d576d3",
      prevItem: 9,
    },
    {
      text: 7,
      color: "#71abda",
      prevItem: 4,
    },
    {
      text: 8,
      color: "#eae428",
      prevItem: 3,
    },
    {
      text: 9,
      color: "#afb9c9",
      prevItem: 1,
    },
  ];
  return (
    <div className="box-container">
      {boxList.map(({ text, color, prevItem }, ind) => (
        <Box
          key={ind}
          text={text}
          color={color}
          prevItem={prevItem}
          onClick={onFinalClick}
        ></Box>
      ))}
    </div>
  );
};

export default BoxContainer;
