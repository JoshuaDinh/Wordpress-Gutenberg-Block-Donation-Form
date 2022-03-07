import "./frontend.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormInput from "./components/FormInput";

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me");

divsToUpdate.forEach((div) => {
  const data = JSON.parse(div.querySelector("pre").innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove("boilerplate-update-me");
});

function OurComponent(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });
  const handleFormChange = (event) => {
    // Clone form because we need to modify it
    const updatedForm = { ...form };

    // Get the name of the field that caused this change event
    // Get the new value of this field
    // Assign new value to the appropriate form field
    updatedForm[event.target.name] = event.target.value;

    console.log("Form changed: ", updatedForm);

    // Update state
    setForm(updatedForm);
  };
  return (
    <div className="boilerplate-frontend">
      <FormInput
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleFormChange}
      />
      <FormInput
        label="Email Address"
        type="email"
        name="emailAddress"
        value={form.emailAddress}
        onChange={handleFormChange}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
      />{" "}
    </div>
  );
}
