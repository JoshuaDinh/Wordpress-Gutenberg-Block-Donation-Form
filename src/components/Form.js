import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import StepContext from "../context/StepContext";
import Button from "./Button";

const Form = (props) => {
  const { step } = useContext(StepContext);
  const methods = useFormContext();

  const { children } = props;
  const { handleSubmit } = methods;

  const onSubmit = (data) => console.log(data);

  const onErrors = (errors) => console.error(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit, onErrors)}>
      {/* Renders Input Components */}
      {children}
      {/* If current step is less than or equal to 1 display button to proceed. Otherwise display submit button */}
      <Button onSubmit={handleSubmit(onSubmit, onErrors)} />
    </form>
  );
};

export default Form;
