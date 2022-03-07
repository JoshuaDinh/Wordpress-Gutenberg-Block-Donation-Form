import FormInput from "../components/FormInput";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const methods = useFormContext();

  return (
    <>
      <FormInput
        name="FirstName"
        placeHolder="FirstName"
        label="FirstName"
        type="text"
        error={methods.formState.errors?.FirstName?.message}
      />
      <FormInput
        name="LastName"
        placeHolder="LastName"
        label="LastName"
        type="text"
        error={methods.formState.errors?.LastName?.message}
      />
      <FormInput
        name="Email"
        placeHolder="Email"
        label="Email"
        type="email"
        error={methods.formState.errors?.Email?.message}
      />
    </>
  );
}
