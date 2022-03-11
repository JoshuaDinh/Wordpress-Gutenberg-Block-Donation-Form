import FormInput from "../components/FormInput";
import { useFormContext } from "react-hook-form";
import ExpInput from "../components/ExpInput";

export function Step1() {
  const methods = useFormContext();
  const { errors } = methods.formState;

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
}

export function Step2() {
  const methods = useFormContext();
  const { errors } = methods.formState;
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
      <FormInput
        name="ExpiryDate"
        placeHolder="Exp. Date"
        label="MM/YY:"
        text="date"
        error={errors?.ExpiryDate?.message}
      />

      {/* <ExpInput label="Exp. Date:" /> */}
      <div className="form__card__container">
        <FormInput
          name="ExpiryDate"
          placeHolder="Exp. Date"
          label="MM/YY:"
          text="date"
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
      </div>
    </>
  );
}

export function Result() {
  return <div>result</div>;
}
