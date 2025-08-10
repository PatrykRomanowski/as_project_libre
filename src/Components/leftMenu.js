import React from "react";
import "./leftMenu.css"; // Import the corresponding CSS for styling
import { useSelector, useDispatch } from "react-redux";

const LeftMenuComponent = () => {
  const buttons = [
    "SUMA KOSZTÓW",
    "Button 2",
    "Button 3",
    "Button 4",
    "Button 5",
  ];

  const clickButton = (label) => {
    console.log("label");
  };

  return (
    <div className="left-menu">
      {buttons.map((label, index) => (
        <button onClick={() => clickButton(label)} key={index}>
          {label}
        </button>
      ))}
      r
    </div>
  );
};

export default LeftMenuComponent;
