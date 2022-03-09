import Form from "./components/Form";
import "./index.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Result from "./steps/Result";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  return (
    <form className="form">
      <div className="form__header">
        <h2>GiveWP</h2>
        <img alt="img" src="" />
      </div>
      <>
        <div className="form__group">
          <label className="form__label">First Name:</label>
          <div className="form__group__wrapper">
            <input
              className="form__input"
              text="text"
              placeholder="First Name"
            />
            <p className="error__message"></p>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">Last Name:</label>
          <div className="form__group__wrapper">
            <input
              className="form__input"
              text="text"
              placeholder="Last Name"
            />
            <p className="error__message"></p>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">Email:</label>
          <div className="form__group__wrapper">
            <input className="form__input" text="text" placeholder="Email" />
            <p className="error__message"></p>
          </div>
        </div>
      </>
      <button id="form__button" tyle="submit">
        Next Step
      </button>
    </form>
  );
}
