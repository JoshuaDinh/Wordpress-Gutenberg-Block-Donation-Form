import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema, PaymentSchema } from "../schema/schema";
import { useStateMachine } from "little-state-machine";
import updateAction from "../actions/updateAction";
import "../styles/main.scss";

function ErrorMessage({ error }) {
  const { state, actions } = useStateMachine({ updateAction });
  console.log(error);
  const {
    formState: { errors },
  } = useForm({
    defaultValues: state.data,
    resolver: yupResolver(UserSchema, PaymentSchema),
  });
  return <p className="error__message">{error && `${error} *`}</p>;
}

export default ErrorMessage;
