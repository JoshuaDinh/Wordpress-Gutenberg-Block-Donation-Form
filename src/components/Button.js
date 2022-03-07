import { useContext } from "react";
import StepContext from "../context/StepContext";

export default function Button() {
  const { step, setStep } = useContext(StepContext);

  const handleClick = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };
  console.log(step);
  return <button onClick={handleClick}>Proceed</button>;
}
