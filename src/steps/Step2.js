import FormInput from "../components/FormInput";

export default function Step2() {
  return (
    <>
      <FormInput
        name="CreditCardNumber"
        placeHolder="CreditCardNumber"
        label="CreditCardNumber"
      />
      <FormInput
        name="ExpiryDate"
        placeHolder="ExpiryDate"
        label="ExpiryDate"
      />
      <FormInput name="Cvv" placeHolder="Cvv" label="Cvv" />
    </>
  );
}
