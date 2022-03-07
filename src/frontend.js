import "./frontend.scss";
import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "./schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  const methods = useForm({ resolver: yupResolver(schema) });

  return (
    <FormProvider {...methods}>
      <Form>
        <Step1 />
      </Form>
    </FormProvider>
  );
}
