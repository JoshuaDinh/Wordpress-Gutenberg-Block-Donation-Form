import FormInput from "../components/FormInput";

export default function Step1() {
  return (
    <>
      <FormInput
        name="FirstName"
        placeHolder="FirstName"
        label="FirstName"
        type="text"
      />
      <FormInput
        name="LastName"
        placeHolder="LastName"
        label="LastName"
        type="text"
      />
      <FormInput name="Email" placeHolder="Email" label="Email" type="email" />
    </>
  );
}
