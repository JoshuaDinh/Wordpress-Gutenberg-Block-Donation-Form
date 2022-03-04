import React from "react";
import Header from "./Header";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PaymentSchema } from "../schema/schema";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../actions/updateAction";
import "../styles/main.scss";

function Step2() {
  const { state, actions } = useStateMachine({ updateAction });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state.data,
    resolver: yupResolver(PaymentSchema),
  });

  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/result");
  };

  return (
    <section className="section">
      <div className="container">
        <Header header="React Hook Form" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__group">
            {/* CreditCard Number */}
            <label htmlFor="CreditCardNumber">Card Number</label>
            <input
              id="CreditCardNumber"
              {...register("CreditCardNumber", {
                required: true,
                maxLength: 16,
                minLength: 16,
              })}
              className="input"
              placeholder="Credit card number (16 digits)"
              aria-invalid={errors.CreditCardNumber ? "true" : "false"}
            />
            <ErrorMessage error={errors?.CreditCardNumber?.message} />
          </div>
          {/* Expiry Date */}
          <div className="form__group">
            <label htmlFor="ExpiryDate">Exp. Date</label>
            <input
              type="month"
              id="start"
              name="start"
              {...register("ExpiryDate", {
                required: true,
              })}
              className="input"
              type="text"
              placeholder="Credit card expiration date (MM/YY)"
              aria-invalid={errors.ExpiryDate ? "true" : "false"}
            />
            <ErrorMessage error={errors?.ExpiryDate?.message} />
          </div>
          {/* <div className="form__group">
            <label htmlFor="ExpiryDate">Exp. Date</label>
            <input
              {...register("ExpiryDate", {
                required: true,
              })}
              className="input"
              type="text"
              placeholder="Credit card expiration date (MM/YY)"
              aria-invalid={errors.ExpiryDate ? "true" : "false"}
            />
            <ErrorMessage error={errors?.ExpiryDate?.message} />
          </div> */}
          {/* CVV */}
          <div className="form__group">
            <label htmlFor="Cvv">CVV</label>
            <input
              id="Cvv"
              {...register("Cvv", {
                required: true,
                minLength: 3,
                maxLength: 3,
              })}
              className="input"
              type="number"
              placeholder="Cvv"
              aria-invalid={errors.Cvv ? "true" : "false"}
            />
            <ErrorMessage error={errors?.Cvv?.message} />
          </div>
          {/* Anonymous */}
          <div className="form__group form__group-checkbox">
            <label htmlFor="Anonymous">Anonymous?</label>
            <input
              {...register("Anonymous", {
                required: true,
                minLength: 3,
                maxLength: 4,
              })}
              className="input"
              type="checkbox"
            />
          </div>
          <input type="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Step2;
