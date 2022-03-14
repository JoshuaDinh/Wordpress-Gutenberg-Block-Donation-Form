import * as yup from "yup";

// Schema for validation
export const schema = yup.object().shape({
  FirstName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Please enter the correct format")
    .max(25)
    .required(),
  LastName: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Please enter the correct format")
    .max(25)
    .required(),
  Email: yup.string().email().required(),
  CardNumber: yup
    .number()
    // Test number of characters in input
    .test(
      "len",
      "Must be exactly 16 digits",
      (val) => !val || (val && val.toString().length === 16)
    )
    .typeError("Please enter the correct format")
    .nullable()
    .required(),
  expireMM: yup
    .number()
    .test(
      "len",
      "Please enter the correct format (Max: 2 digits)",
      (val) => !val || (val && val.toString().length === 2)
    )
    .typeError("Please enter the correct format")
    .required(""),
  expireYY: yup
    .number()
    .test(
      "len",
      "Please enter the correct format (Max: 2 digits)",
      (val) => !val || (val && val.toString().length === 2)
    )
    .typeError("Please enter the correct format")
    .required(""),
  cvv: yup
    .number()
    // Test number of characters in input
    .test(
      "len",
      "Must be exactly 3 digits",
      (val) => !val || (val && val.toString().length === 3)
    )
    .typeError("Please enter the correct format")
    .required(),
  anonymous: false,
});
