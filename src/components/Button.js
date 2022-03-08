import { useContext } from "react";
import StepContext from "../context/StepContext";
import { useFormContext } from "react-hook-form";

function renderButton(step, isValid, handleClick) {
  switch (step) {
    case 0:
      return (
        <button
          id="form__button"
          className={`form__button`}
          type="submit"
          onClick={(event) => handleClick(event)}
          disabled={!isValid}
        >
          Next Step
        </button>
      );
      break;
    case 1:
      return (
        <button
          id="form__button"
          className={`form__button`}
          type="submit"
          onSubmit={(event) => handleClick(event)}
          disabled={!isValid}
        >
          Submit
        </button>
      );
      break;
  }
}

export default function Button() {
  const { step, setStep } = useContext(StepContext);

  const methods = useFormContext();
  const { isValid } = methods.formState;

  function handleClick(event) {
    event.preventDefault();
    isValid && setStep(step + 1);
  }
  console.log(step);
  return <>{renderButton(step, isValid, handleClick)}</>;
}
