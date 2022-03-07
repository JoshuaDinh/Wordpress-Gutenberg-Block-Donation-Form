import "./frontend.scss";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Step1 from "./steps/Step1";
import { useForm, FormProvider } from "react-hook-form";
import { IndexContext } from "./context/IndexContext";
import Step2 from "./steps/Step2";
import { schema } from "./schema/schema";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  const [index, setIndex] = useState(0);

  const methods = useForm({ schema });
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <IndexContext.Provider value={{ index, setIndex }}>
        <Form>
          {index === 0 ? <Step1 /> : index === 1 ? <Step2 /> : <Step1 />}
        </Form>
      </IndexContext.Provider>
    </FormProvider>
  );
}
