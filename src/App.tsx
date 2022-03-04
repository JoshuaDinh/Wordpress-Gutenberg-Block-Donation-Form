import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Result from "./components/Result";

// Initialize global
createStore({
  data: {
    FirstName: "",
    LastName: "",
    Email: "",
    CreditCardNumber: "",
    ExpiryDate: "",
    Cvv: "",
    Anonymous: "",
  },
});

export default function App() {
  return (
    <StateMachineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </StateMachineProvider>
  );
}
