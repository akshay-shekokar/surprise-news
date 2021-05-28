import React from "react";
import "./Message.css";

const Message = ({ number, message, color, onOkClick }) => {
  return (
    <div className="message-container">
      <div className="message-text" style={{color}}>{message}</div>
      <div>
        कृपया O.K. नंतर {number} दाबा
        <button className="primary" onClick={onOkClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Message;
