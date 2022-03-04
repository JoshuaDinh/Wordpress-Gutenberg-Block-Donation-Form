import React from "react";
import { useStateMachine } from "little-state-machine";
import "../styles/main.scss";
import { ObjectSchema } from "yup";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import updateAction from "../actions/updateAction";
import StepCount from "./StepCount";
import Header from "./Header";

function Result() {
  // Retrieve State
  const { state } = useStateMachine(updateAction);
  const data = state.data;

  const transformData = Object.entries(data);

  const display = transformData.map((item, index) => {
    return (
      <div>
        <strong>{item[0]}</strong>
        <p>{item[1]}</p>
      </div>
    );
  });

  return (
    <section className="section">
      <div className="container">
        <Header />
        <center className="result">{display}</center>
      </div>
    </section>
  );
}

export default Result;
