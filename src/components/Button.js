import { useFormContext } from "react-hook-form";

export default function Button({ onSubmit, step, setStep }) {
  const methods = useFormContext();
  const { trigger } = methods;
  const { isValid, errors, dirtyFields } = methods.formState;

  function handleClick(event) {
    event.preventDefault();
    async () => {
      const result = await trigger("FirstName", { shouldFocus: true });
    };
    // Do not proceed to next step if inputs listed below contain errors.
    if (!errors?.FirstName || !errors?.LastName || !errors?.Email) {
      setStep(step + 1);
    }
  }

  const validation =
    !dirtyFields.FirstName ||
    !dirtyFields.LastName ||
    !dirtyFields.Email ||
    errors?.FirstName ||
    errors?.LastName ||
    errors?.Email;

  switch (step) {
    case 0:
      return (
        <button
          id={validation ? "form__button__invalid" : "form__button"}
          type="button"
          onClick={(event) => handleClick(event)}
          // Disables button if input has not been selected or if the listed inputs contain errors.
          disabled={validation}
        >
          Next Step
        </button>
      );
      break;
    case 1:
      return (
        <button id="form__button" type="submit" onSubmit={onSubmit}>
          Submit
        </button>
      );
      break;
    case 2:
      return null;
      break;
  }
  return;
}
