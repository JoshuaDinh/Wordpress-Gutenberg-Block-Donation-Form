import { useContext } from "react";
import FormInput from "./FormInput";
import { useFormContext } from "react-hook-form";
import ExpInput from "./ExpInput";
import PropsContext from "../context/PropsContext";

// Renders inputs based on current step of form
export default function Steps({ step }) {
  const { checkbox } = useContext(PropsContext);
  const methods = useFormContext();
  const { errors } = methods?.formState;

  switch (step) {
    case 0:
      return (
        <>
          <FormInput
            name="FirstName"
            placeHolder="First Name"
            label="First Name:"
            text="text"
            error={errors?.FirstName?.message}
          />
          <FormInput
            name="LastName"
            placeHolder="Last Name"
            label="Last Name:"
            text="text"
            error={errors?.LastName?.message}
          />
          <FormInput
            name="Email"
            placeHolder="Email:"
            label="Email"
            text="email"
            error={errors?.Email?.message}
          />
        </>
      );
      break;
    case 1:
      return (
        <>
          <FormInput
            name="CardNumber"
            placeHolder="xxxx-xxxx-xxxx-xxxx"
            label="Card Number:"
            number="number"
            error={errors?.CardNumber?.message}
            value={true}
          />
          <ExpInput
            name="ExpiryDate"
            placeHolder="Exp. Date"
            label="MM/YY:"
            number="number"
            error={errors?.ExpiryDate?.message}
          />

          <FormInput
            name="cvv"
            placeHolder="cvv"
            label="cvv: "
            number="number"
            error={errors?.cvv?.message}
            value={true}
          />
          {checkbox && (
            <div className="form__group">
              <label className="form__label__checkbox">
                Would you like to donate anonymously?
              </label>
              <input className="form__input__checkbox" type="checkbox" />
            </div>
          )}
        </>
      );
      break;
    case 2:
      return null;
      break;
  }

  return;
}
