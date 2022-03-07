import { useContext } from "react";
import { IndexContext } from "../context/IndexContext";
import { useForm, useFormContext } from "react-hook-form";

export default function Button() {
  const { index, setIndex } = useContext(IndexContext);
  const methods = useFormContext();

  const handleClick = (event) => {
    event.preventDefault();
    setIndex(index + 1);
  };
  return <button onClick={handleClick}>Proceed</button>;
}
