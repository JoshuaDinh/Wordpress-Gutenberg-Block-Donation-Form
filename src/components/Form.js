import { useFormContext } from "react-hook-form";
import Button from "./Button";

const Form = (props) => {
  const { children } = props;
  const methods = useFormContext();

  const onSubmit = (data) => console.log(data);

  const onErrors = (errors) => console.error(errors);

  return (
    <form className="form" onSubmit={methods.handleSubmit(onSubmit, onErrors)}>
      {/* Renders Input Components */}
      {children}
      <Button />
    </form>
  );
};

export default Form;
