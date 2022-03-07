import react from "react";

export default function FormInput(props) {
  const { label, placeHolder, value } = props;

  return (
    <div className="form__input">
      <label>{label}</label>
      <input type="text" placeholder={placeHolder} value={value} />;
    </div>
  );
}
