import FormInput from "../components/FormInput";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const methods = useFormContext();
  const { errors } = methods.formState;

  console.log(errors);
  return (
    <>
      <FormInput
        name="FirstName"
        placeHolder="First Name"
        label="First Name"
        type="text"
        error={errors?.FirstName?.message}
      />
      <FormInput
        name="LastName"
        placeHolder="Last Name"
        label="Last Name"
        type="text"
        error={errors?.LastName?.message}
      />
      <FormInput
        name="Email"
        placeHolder="Email"
        label="Email"
        type="email"
        error={errors?.Email?.message}
      />
    </>
  );
}
