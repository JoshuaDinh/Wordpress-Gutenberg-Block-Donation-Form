import "./index.scss";
import { useState } from "react";
wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    title: { type: "string" },
    img: { type: "string" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  const [displayOnly, setDisplayOnly] = useState({
    input1: false,
    input2: false,
    input3: false,
  });
  const { attributes, setAttributes } = props;

  function updateTitle(event) {
    setAttributes({ title: event.target.value });
  }

  console.log(displayOnly);
  return (
    <form className="form">
      <div className="form__header">
        <input
          className="form__title__input"
          type="text"
          placeholder="Please Enter a title for the form.."
          onChange={updateTitle}
          value={attributes.title}
        />
        <p>(Please upload an image for your logo.)</p>
        <input className="form__file__upload" type="File" />
      </div>

      <div className="form__group">
        <label className="form__label">First Name:</label>
        <div
          className="form__group__wrapper"
          onMouseEnter={() => setDisplayOnly({ ...displayOnly, input1: true })}
        >
          <input
            className="form__input"
            text="text"
            placeholder={
              displayOnly.input1
                ? "Field locked unable to edit.."
                : "First Name"
            }
            disabled={true}
          />
          <p className="error__message"></p>
        </div>
      </div>
      <div
        className="form__group"
        onMouseEnter={() => setDisplayOnly({ ...displayOnly, input2: true })}
      >
        <label className="form__label">Last Name:</label>
        <div className="form__group__wrapper">
          <input
            className="form__input"
            text="text"
            placeholder={
              displayOnly.input2 ? "Field locked unable to edit.." : "Last Name"
            }
            disabled={true}
          />
          <p className="error__message"></p>
        </div>
      </div>
      <div
        className="form__group"
        onMouseEnter={() => setDisplayOnly({ ...displayOnly, input3: true })}
      >
        <label className="form__label">Email:</label>
        <div className="form__group__wrapper">
          <input
            className="form__input"
            text="text"
            placeholder={
              displayOnly.input3 ? "Field locked unable to edit.." : "Email"
            }
            disabled={true}
          />
          <p className="error__message"></p>
        </div>
      </div>

      <button id="form__button" disabled={true}>
        Next Step
      </button>
    </form>
  );
}
