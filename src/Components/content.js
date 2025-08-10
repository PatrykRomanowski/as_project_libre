import React from "react";
import "./content.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, getName } from "../store/testSlice";

const Content = () => {
  const actualSite = useSelector((state) => state.test.value1);
  return <div className="containerContent">{actualSite}</div>;
};

export default Content;
