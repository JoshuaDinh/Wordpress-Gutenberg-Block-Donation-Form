import { useFormContext } from "react-hook-form";

export default function FormInput(props) {
  const {
    type = "text",
    label,
    name,
    placeHolder,
    defaultValue,
    ariaInvalid,
  } = props;
  const methods = useFormContext();

  console.log(methods.watch(name)); // watch input value by passing the name of it

  return (
    <div className="form__group">
      <label>{label}</label>
      <input
        type={type}
        placeHolder={placeHolder}
        name={name}
        id={name}
        {...methods.register(name, { required: true })}
        ariaInvalid={ariaInvalid}
      />
    </div>
  );
}
