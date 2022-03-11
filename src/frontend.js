import "./frontend.scss";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Result from "./steps/Result";
import StepContext from "./context/StepContext";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "./schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import PropsContext from "./context/PropsContext";
import StepCount from "./components/StepCount";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  const [step, setStep] = useState(0);
  const methods = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  function displaySteps() {
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
  return (
    <FormProvider {...methods}>
      <PropsContext.Provider value={props}>
        <StepContext.Provider value={{ step, setStep }}>
          <StepCount />
          <Form>{displaySteps()}</Form>
        </StepContext.Provider>
      </PropsContext.Provider>
    </FormProvider>
  );
}
