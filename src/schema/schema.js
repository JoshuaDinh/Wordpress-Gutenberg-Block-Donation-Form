import * as yup from "yup";

// User Information
export const userSchema = yup.object().shape({
  FirstName: yup.string().max(25).required(),
  LastName: yup.string().max(25).required(),
  Email: yup.string().email().required(),
});

export const paymentSchema = yup.object().shape({
  CreditCardNumber: yup
    .string()
    .typeError("Looks like you forgot some numbers")
    .required(),
  //Apply date formating
  ExpiryDate: yup
    .string()
    .typeError("Somethings fishy about this.")
    .required(""),
  Cvv: yup.string().typeError("Ooops.. Try 3 digits").required(),
  anonymous: false,
});
