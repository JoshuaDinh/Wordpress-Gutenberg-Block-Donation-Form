import { useFormContext } from "react-hook-form";

export default function FormInput(props) {
  const {
    type = "text",
    label,
    name,
    placeHolder,
    defaultValue,
    ariaInvalid,
    error,
  } = props;
  const methods = useFormContext();

  return (
    <div className="form__group">
      <label>{label}</label>
      <div className="form__group__wrapper">
        <input
          type={type}
          placeHolder={placeHolder}
          name={name}
          id={name}
          {...methods.register(name, { required: true })}
          ariaInvalid={ariaInvalid}
        />
        <p className="error__message">{error}</p>
      </div>
    </div>
  );
}
