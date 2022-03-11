import { useFormContext } from "react-hook-form";

export default function Button({ onSubmit, step, setStep }) {
  const methods = useFormContext();
  const { isValid, errors, dirtyFields } = methods.formState;

  function handleClick(event) {
    event.preventDefault();
    // Do not proceed to next step if inputs listed below contain errors.
    if (!errors?.FirstName || !errors?.LastName || !errors?.Email) {
      setStep(step + 1);
    }
  }

  function validateStep1() {
    if (
      !dirtyFields.FirstName ||
      !dirtyFields.LastName ||
      !dirtyFields.Email ||
      errors?.FirstName ||
      errors?.LastName ||
      errors?.Email
    ) {
      return true;
    }
  }
  function validateStep2() {
    if (
      !dirtyFields.CardNumber ||
      !dirtyFields.Expirtydate ||
      !dirtyFields.cvv ||
      errors?.CardNumber ||
      errors?.Expirtydate ||
      errors?.cvv
    ) {
      return true;
    }
  }

  switch (step) {
    case 0:
      return (
        <button
          id={validateStep1() ? "form__button__invalid" : "form__button"}
          type="button"
          onClick={(event) => handleClick(event)}
          // Disables button if input has not been selected or if the listed inputs contain errors.
          disabled={validateStep1()}
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
          onSubmit={onSubmit}
          // Disables button form is inValid.
          disabled={!isValid}
        >
          Submit
        </button>
      );
      break;
    case 2:
      return <h4>Form Completed</h4>;
      break;
  }
  return <>{renderButton()}</>;
}
