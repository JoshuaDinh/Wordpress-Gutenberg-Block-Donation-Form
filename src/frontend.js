import "./frontend.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import StepCount from "./components/StepCount";
import Button from "./components/Button";
import FormTitle from "./components/FormTitle";
import { schema } from "./schema/schema";
import { Step1, Step2, Result } from "./steps/steps";
import PropsContext from "./context/PropsContext";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<Form {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

// Conditionally renders which Inputs to display
function displaySteps(step) {
  switch (step) {
    case 0:
      return <Step1 />;
      break;
    case 1:
      return <Step2 />;
      break;
    case 2:
      return <Result />;
      break;
  }
}

function Form(props) {
  // Step state is used to conditionally render components / update styling.
  const [step, setStep] = useState(0);

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, isValid } = methods;

  // Increments Step state & submits form
  const onSubmit = (data) => {
    console.log(data);
    setStep(step + 1);
  };

  const onErrors = (errors) => console.error(errors);
  console.log(methods);
  console.log(props);

  return (
    <FormProvider {...methods}>
      {/* Passes Props from index.js(BlockEditor Settings) */}
      <PropsContext.Provider value={props}>
        <>
          <StepCount step={step} />
          <form className="form" onSubmit={handleSubmit(onSubmit, onErrors)}>
            <FormTitle />
            {/* Renders Input Components */}
            {displaySteps(step)}
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
