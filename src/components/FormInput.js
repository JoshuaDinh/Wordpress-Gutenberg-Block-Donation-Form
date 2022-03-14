import { useFormContext } from "react-hook-form";

export default function FormInput(props) {
  const {
    type,
    text,
    number,
    label,
    name,
    placeHolder,
    ariaInvalid,
    error,
  } = props;
  const methods = useFormContext();

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
      </label>
      <div className="form__group__wrapper">
        <input
          id={name}
          name={name}
          className="form__input"
          type={type}
          placeHolder={placeHolder}
          aria-invalid={error ? "true" : "false"}
          {...methods.register(name, {
            required: {
              value: true,
              message: `Please enter your ${placeHolder}`,
            },
          })}
        />
        <p className="error__message">{error}</p>
      </div>
    </div>
  );
}
