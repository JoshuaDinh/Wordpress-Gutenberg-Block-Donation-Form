import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import StepContext from "../context/StepContext";
import Button from "./Button";

const Form = (props) => {
  const { step } = useContext(StepContext);
  const { children } = props;
  const methods = useFormContext();

  const onSubmit = (data) => console.log(data);

  const onErrors = (errors) => console.error(errors);

  return (
    <form className="form" onSubmit={methods.handleSubmit(onSubmit, onErrors)}>
      {/* Renders Input Components */}
      {children}
      {/* If current step is less than or equal to 1 display button to proceed. Otherwise display submit button */}
      {step <= 1 ? <Button /> : <input type="submit" />}
    </form>
  );
};

export default Form;
