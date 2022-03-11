import { useFormContext } from "react-hook-form";

export default function FormInput(props) {
  const { text, number, label, name, placeHolder, ariaInvalid, error } = props;

  const methods = useFormContext();

  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <div className="form__group__wrapper">
        <input
          className="form__input"
          key={name}
          type={number ? number : text}
          placeHolder={placeHolder}
          name={name}
          id={name}
          {...methods.register(name, {
            required: {
              value: true,
              message: `Please enter your ${placeHolder}`,
            },
          })}
          ariaInvalid={ariaInvalid}
        />
        <p className="error__message">{error}</p>
      </div>
    </div>
  );
}
