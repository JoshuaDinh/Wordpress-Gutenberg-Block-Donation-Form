import React from "react";
import "../styles/main.scss";
import StepCount from "./StepCount";

function Header({ header }) {
  // Configure with WP
  // Create title block
  // Create image block

  return (
    <div className="form__title">
      <h1 className="title">{header}</h1>
      <StepCount />
    </div>
  );
}

export default Header;
