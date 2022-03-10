import "./index.scss";
import { useState } from "react";
import {
  useBlockProps,
  PanelBody,
  PanelRow,
  InspectorControls,
  ToggleControl,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    title: { type: "string", source: "children", selector: "h2" },
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
    <>
      <InspectorControls></InspectorControls>
      <form className="form" {...useBlockProps}>
        <div className="form__header">
          <h2>GiveWP</h2>
          <img alt="img" src="image" />
        </div>
        <div className="form__group">
          <div className="form__label">First Name:</div>
          <div
            className="form__group__wrapper"
            onMouseEnter={() =>
              setDisplayOnly({ ...displayOnly, input1: true })
            }
          >
            <div className="form__input">First Name</div>
          </div>
        </div>
        <div
          className="form__group"
          onMouseEnter={() => setDisplayOnly({ ...displayOnly, input2: true })}
        >
          <div className="form__label">Last Name:</div>
          <div className="form__group__wrapper">
            <div className="form__input">Last Name</div>
          </div>
        </div>
        <div
          className="form__group"
          onMouseEnter={() => setDisplayOnly({ ...displayOnly, input3: true })}
        >
          <div className="form__label">Email:</div>
          <div className="form__group__wrapper">
            <div className="form__input">Email</div>
          </div>
        </div>

        <div id="form__button" disabled={true}>
          Next Step
        </div>
      </form>
    </>
  );
}
