import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import StepContext from "../context/StepContext";
import Button from "./Button";
import FormTitle from "./FormTitle";

const Form = (props) => {
  const { step, setStep } = useContext(StepContext);
  const methods = useFormContext();

  const { children } = props;
  const { handleSubmit, isValid } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setStep(step + 1);
  };

  const onErrors = (errors) => console.error(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit, onErrors)}>
      <FormTitle />
      {/* Renders Input Components */}
      {children}
      <Button onSubmit={handleSubmit(onSubmit, onErrors)} />
    </form>
  );
};

export default Form;
