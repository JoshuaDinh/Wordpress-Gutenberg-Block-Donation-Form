import * as yup from "yup";

// Task to complete
// Convert string inputs into correct types / may need typescript to complete

// User Information
export const UserSchema = yup.object().shape({
  FirstName: yup
    .string()
    .max(25)
    // Validates alphabets - error shows for all errors
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  LastName: yup
    .string()
    .max(25)
    // Validates alphabets - error shows for all errors
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required(),
  Email: yup.string().email().required(),
});

// Payment Card Details
export const PaymentSchema = yup.object().shape({
  CreditCardNumber: yup
    .string()
    .test("exact", "Must be 16 digits", (val) => val.length === 16)
    .typeError("Looks like you forgot some numbers")
    .required(),
  ExpiryDate: yup
    .string()
    .typeError("Somethings fishy about this.")
    .required(""),
  Cvv: yup
    .string()
    .test("exact", "Must be 3 digits", (val) => val.length === 3)
    .typeError("Ooops.. Try 3 digits")
    .required(),
  anonymous: false,
});
