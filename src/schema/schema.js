import * as yup from "yup";

// User Information
export const schema = yup.object().shape({
  FirstName: yup
    .string()
    .max(25)

    .required(),
  LastName: yup
    .string()
    .max(25)

    .required(),
  Email: yup.string().email().required(),
  //Disable letters on card input
  CreditCardNumber: yup
    .string()
    .test("exact", "Must be 16 digits", (val) => val.length === 16)
    .typeError("Looks like you forgot some numbers")
    .required(),
  //Apply date formating
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

// // Payment Card Details
// export const PaymentSchema = yup.object().shape({
//   //Disable letters on card input
//   CreditCardNumber: yup
//     .string()
//     .test("exact", "Must be 16 digits", (val) => val.length === 16)
//     .typeError("Looks like you forgot some numbers")
//     .required(),
//   //Apply date formating
//   ExpiryDate: yup
//     .string()
//     .typeError("Somethings fishy about this.")
//     .required(""),
//   Cvv: yup
//     .string()
//     .test("exact", "Must be 3 digits", (val) => val.length === 3)
//     .typeError("Ooops.. Try 3 digits")
//     .required(),
//   anonymous: false,
// });
