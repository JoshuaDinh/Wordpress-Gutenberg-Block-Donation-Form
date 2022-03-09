import * as yup from "yup";

// Schema for validation
export const schema = yup.object().shape({
  FirstName: yup.string().max(25).required(),
  LastName: yup.string().max(25).required(),
  Email: yup.string().email().required(),
  CardNumber: yup
    .number()
    .test(
      "len",
      "Must be exactly 16 digits",
      (val) => !val || (val && val.toString().length === 16)
    )
    .typeError("Looks like you forgot some numbers")
    .nullable()
    .required(),
  ExpiryDate: yup
    .string()
    .typeError("Somethings fishy about this.")
    .required(""),
  cvv: yup
    .number()
    .test(
      "len",
      "Must be exactly 3 digits",
      (val) => !val || (val && val.toString().length === 3)
    )
    .typeError("Ooops.. Try 3 digits")
    .required(),
  anonymous: false,
});
