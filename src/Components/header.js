import "./header.css";
import { useState } from "react";

const HeaderComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      {/* <button
        className="myButton"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        dodaj +1
      </button>
      <div>{counter}</div> */}
      <div className="descriptionHeader">KOSZTORYS REMONTU</div>
    </div>
  );
};

export default HeaderComponent;
