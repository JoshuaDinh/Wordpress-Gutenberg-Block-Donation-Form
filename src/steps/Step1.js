import FormInput from "../components/FormInput";
import { useFormContext } from "react-hook-form";

export default function Step1() {
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
