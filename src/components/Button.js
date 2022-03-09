import { useContext } from "react";
import StepContext from "../context/StepContext";
import { useFormContext } from "react-hook-form";

export default function Button() {
  const { step, setStep } = useContext(StepContext);

  const methods = useFormContext();
  const { isValid, errors, dirtyFields, isDirty } = methods.formState;

  function handleClick(event) {
    event.preventDefault();
    // Do not proceed to next step if input listed below contain errors.
    if (!errors?.FirstName || !errors?.LastName || !errors?.Email) {
      setStep(step + 1);
    }
  }

  console.log(isValid);
  switch (step) {
    case 0:
      return (
        <button
          id={!isValid ? "form__button__invalid" : "form__button"}
          type="button"
          onClick={(event) => handleClick(event)}
          // Disables button if no input has been typed in or if the listed inputs contain errors.
          disabled={
            !dirtyFields.FirstName ||
            !dirtyFields.LastName ||
            !dirtyFields.Email ||
            errors?.FirstName ||
            errors?.LastName ||
            errors?.Email
          }
        >
          Next Step
        </button>
      );
      break;
    case 1:
      return (
        <button
          id={!isValid ? "form__button__invalid" : "form__button"}
          type="submit"
          disabled={
            !dirtyFields.CardNumber ||
            !dirtyFields.Expirtydate ||
            !dirtyFields.cvv ||
            errors?.CardNumber ||
            errors?.Expirtydate ||
            errors?.cvv
          }
        >
          Submit
        </button>
      );
      break;
  }
  return <>{renderButton()}</>;
}
