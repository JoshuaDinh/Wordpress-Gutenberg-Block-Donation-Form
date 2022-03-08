import FormInput from "../components/FormInput";
import { useFormContext } from "react-hook-form";

export default function Step2() {
  const methods = useFormContext();
  const { errors } = methods.formState;

  return (
    <>
      <FormInput
        name="CreditCardNumber"
        placeHolder="xxxx-xxxx-xxxx"
        label="Credit Card Number"
        type="text"
        error={errors?.CreditCardNumber?.message}
      />
      <FormInput
        name="ExpiryDate"
        placeHolder="Expiration Date"
        label="Expiry Date"
        type="text"
        error={errors?.ExpiryDate?.message}
      />
      <FormInput
        name="Cvv"
        placeHolder="Cvv"
        label="Cvv"
        type="text"
        error={errors?.Cvv?.message}
      />
    </>
  );
}
