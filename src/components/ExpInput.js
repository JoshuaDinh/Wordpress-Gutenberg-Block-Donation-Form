import { useFormContext } from "react-hook-form";

export default function ExpInput() {
  const methods = useFormContext();
  const { errors } = methods.formState;

  return (
    <div className="form__group__exp">
      <label className="form__label__exp">MM/YY</label>
      <div className="form__group__container__exp">
        <div className="form__group__wrapper__exp">
          <input
            className="form__input__exp"
            type="number"
            placeHolder="MM"
            name="expireMM"
            id="expireMM"
            {...methods.register("expireMM", {
              required: {
                value: true,
                message: " Please enter your expireMM",
              },
            })}
          />
          <input
            className="form__input__exp"
            type="number"
            placeHolder="YY"
            name="expireYY"
            id="expireYY"
            {...methods.register("expireYY", {
              required: {
                value: true,
                message: " Please enter your expireYY",
              },
            })}
          />
        </div>

        <p className="error__message__exp">
          {errors?.expireMM?.message || errors?.expireYY?.message}
        </p>
      </div>
    </div>
  );
}
