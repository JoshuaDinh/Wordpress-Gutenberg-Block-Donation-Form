import "./frontend.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import StepCount from "./components/StepCount";
import Button from "./components/Button";
import FormTitle from "./components/FormTitle";
import Steps from "./components/steps";
import { schema } from "./schema/schema";
import PropsContext from "./context/PropsContext";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<Form {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function Form(props) {
  // Step state is used to conditionally render components / update styling.
  const [step, setStep] = useState(0);

  const methods = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const { handleSubmit, isValid } = methods;

  // Increments Step state & submits form.
  const onSubmit = (data) => {
    console.log(data);
    setStep(step + 1);
  };

  const onErrors = (errors) => console.error(errors);
  console.log(methods);
  console.log(props);

  return (
    <FormProvider {...methods}>
      {/* Passes Props from index.js(BlockEditor Settings). */}
      <PropsContext.Provider value={props}>
        <>
          <StepCount step={step} />
          <form className="form" onSubmit={handleSubmit(onSubmit, onErrors)}>
            <FormTitle />
            {/* Renders Input Components / Current Step in the form. */}
            <Steps step={step} />
            <Button
              onSubmit={handleSubmit(onSubmit, onErrors)}
              step={step}
              setStep={setStep}
            />
          </form>
        </>
      </PropsContext.Provider>
    </FormProvider>
  );
}
