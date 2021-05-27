import React, { useState } from "react";
import Box from "../Box/Box";
import "./BoxContainer.css";
import { tileColor } from "../../utils/constants";
import Message from "../Message/Message";
import getUniqueNumbers from "../../utils/uniqueNumbers";

const sequence = getUniqueNumbers();

const BoxContainer = ({ onFinalClick }) => {
  const [showMessage, setShowMessage] = useState(true);
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(0);
  const numberSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onClick = (text) => {
    if(index !== 8) {
      onFinalClick();
    } else {
      let num = index;
      if(text === sequence[num]) {
        num += 1;
      }
      setIndex(index + 1);
      setMessage('');
      setShowMessage(true);
    }
  };

  return (
    <div className="box-container">
      {showMessage ? (
        <Message message={message} number={sequence[index]} onOkClick={() => setShowMessage(false)}/>
      ) : (
        numberSequence.map((number, ind) => (
          <Box
            key={ind}
            text={number}
            color={tileColor[ind]}
            onClick={() => onClick(number)}
          ></Box>
        ))
      )}
    </div>
  );
};

export default BoxContainer;
