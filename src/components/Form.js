import { useContext } from "react";
import { useForm, useFormContext } from "react-hook-form";
import Button from "./Button";
import { IndexContext } from "../context/IndexContext";

const Form = (props) => {
  const { children } = props;
  //Context
  const methods = useFormContext();
  const { index, setIndex } = useContext(IndexContext);

  const onSubmit = (data) => console.log(data);

  console.log(methods);
  return (
    <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
      {/* Renders Input Components */}
      {children}
      {index > 1 ? <input type="Submit" /> : <Button />}
    </form>
  );
};

export default Form;
