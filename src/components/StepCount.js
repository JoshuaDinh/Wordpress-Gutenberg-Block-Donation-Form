import React, { useState, useEffect } from "react";
import "../styles/main.scss";

const StepCount = () => {
  const [path, setPath] = useState("");
  const step1 = "/";
  const step2 = "/step2";
  const result = "/result";

  // Match URL to apply styling
  function validateUrl(step) {
    return path === window.location.origin + step && "step__active";
  }
  useEffect(() => {
    setPath(window.location.href);
  }, [window.location.href]);
  return (
    <ul className="step__count">
      <li className={`step ${validateUrl(step1)}`}>1</li>
      <li className={`step ${validateUrl(step2)}`}>2</li>
      <li className={`step ${validateUrl(result)}`}>3</li>
    </ul>
  );
};

export default StepCount;
