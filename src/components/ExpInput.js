import { useFormContext } from "react-hook-form";

export default function ExpInput(props) {
  const { label, ariaInvalid, error } = props;

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
{
  /* <div className="form__group">
      <label className="form__label">{label}</label>
      <div className="form__group__wrapper">
        <div className="form__group__exp">
          <select
            className="form__select"
            name="expireMM"
            id="expireMM"
            {...methods.register("expireMM", {
              required: {
                value: true,
                message: "Exp. Month is required",
              },
            })}
          >
            <option value="">Month</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            className="form__select"
            name="expireYY"
            id="expireYY"
            {...methods.register("expireYY", {
              required: {
                value: true,
                message: "Exp. Year is required",
              },
            })}
          >
            <option value="">Year</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>
        </div>
        <p className="error__message">{error}</p>
      </div>
    </div> */
}
