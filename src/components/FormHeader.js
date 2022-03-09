import { useContext } from "react";
import PropsContext from "../context/PropsContext";

export default function FormHeader() {
  // Retrieve title props set by block editor
  const { title } = useContext(PropsContext);

  return (
    <div className="form__header">
      <h2>{title}</h2>
      <img alt="img" src="img" />
    </div>
  );
}
