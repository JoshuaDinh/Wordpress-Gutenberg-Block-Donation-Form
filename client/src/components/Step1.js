import React from "react";
import "../styles/main.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "../schema/schema";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../actions/updateAction";
import ErrorMessage from "./ErrorMessage";
import Header from "./Header";

function Step1() {
  // Retrieve state
  const { state, actions } = useStateMachine({ updateAction });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state.data,
    resolver: yupResolver(UserSchema),
  });

  console.log(state);

  const navigate = useNavigate();

  // Update data & navigate to next next page
  const onSubmit = (data) => {
    actions.updateAction(data);
    navigate("/step2");
  };

  return (
    <section className="section">
      <div className="container">
        <Header header="React Hook Form" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__group">
            <label htmlFor="FirstName">First Name</label>
            <input
              id="FirstName"
              {...register("FirstName", { required: true })}
              className="input"
              type="text"
              placeholder="First Name"
              aria-invalid={errors.FirstName ? "true" : "false"}
            />
            <ErrorMessage error={errors?.FirstName?.message} />
          </div>
          <div className="form__group">
            <label htmlFor="LastName">Last Name</label>
            <input
              id="LastName"
              {...register("LastName", { required: true })}
              className="input"
              type="text"
              placeholder="Last Name"
              aria-invalid={errors?.LastName ? "true" : "false"}
            />
            <ErrorMessage error={errors?.LastName?.message} />
          </div>
          <div className="form__group">
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              {...register("Email", { required: true })}
              className="input"
              type="Email"
              placeholder="Email"
              aria-invalid={errors.Email ? "true" : "false"}
            />
            <ErrorMessage error={errors?.Email?.message} />
          </div>
          <input type="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Step1;
