import { useContext } from "react";
import PropsContext from "../context/PropsContext";

export default function FormTitle() {
  // Retrieve title props set by block editor
  const { title, url, alt } = useContext(PropsContext);

  return (
    <div className="form__title">
      <h3>{title}</h3>
      <img className="form__img" alt={alt} src={url} />
    </div>
  );
}
