import React, { useEffect, useState } from "react";
import "./ResultContainer.css";

const color = [
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  "white",
  "transparent",
];
const ResultContainer = () => {
  const [resultColor, setResultColor] = useState(color[0]);
  const [showBaby, setShowBaby] = useState(false);
  const [babySize, setBabySize] = useState(40);
  const [showGreetings, setShowGreetings] = useState(false);
  useEffect(() => {
    color.forEach((clr, ind) => {
      setTimeout(() => {
        setResultColor(clr);
      }, 150 * ind);
    });
  }, []);

  useEffect(() => {
    if (resultColor === "transparent") {
      setShowBaby(true);
      for (let i = 40; i <= 370; i++) {
        setTimeout(() => {
          setBabySize(i + "px");
        }, 10 * i);
      }
      setTimeout(() => {
        setShowGreetings(true);
      }, 3700);
    }
  }, [resultColor]);

  return (
    <div className="result-container" style={{ backgroundColor: resultColor }}>
      {showBaby && (
        <div
          className="baby-image-container"
          style={{ width: babySize, height: babySize }}
        ></div>
      )}
      {showGreetings && (
        <div class="greetings-container">
          <div className="greetings-message">
            Congrats tumhi Aaji Ajoba honar aahat...
          </div>
          <div className="congrats-container"></div>
        </div>
      )}
    </div>
  );
};

export default ResultContainer;
