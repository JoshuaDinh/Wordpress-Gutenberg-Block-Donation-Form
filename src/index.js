import "./index.scss";
import { useState } from "react";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import {
  Panel,
  PanelBody,
  CheckboxControl,
  TextControl,
  MediaPlaceholder,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    title: { type: "string", source: "children", selector: "h2" },
    img: { type: "string" },
    checked: { type: "" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  const { attributes, setAttributes } = props;
  const [step, setStep] = useState(0);

  function updateTitle(event) {
    setAttributes({ title: event.target.value });
  }
  function updateCheckedField(event) {
    setAttributes({ checked: event.target.value });
  }

  function updateSteps() {
    if (step <= 2) {
      return setStep(step + 1);
    } else if (step === 3) {
      return setStep(0);
    }
    console.log(step);
  }

  return (
    <div {...useBlockProps}>
      <InspectorControls>
        <Panel>
          <PanelBody title="Form Settings">
            <TextControl label="Title" value={attributes.title} />
            <CheckboxControl
              label="Allow anonymous donations"
              // checked={isChecked}
              // onChange={updateCheckedField}
            />
          </PanelBody>
        </Panel>
      </InspectorControls>

      <div className="step__count">
        <div
          className={`step ${step === 0 && "step__active"}`}
          onClick={() => setStep(0)}
        >
          {step !== 0 ? "Completed" : "Step 1"}
        </div>
        <div
          className={`step ${step === 1 && "step__active"}`}
          onClick={() => setStep(1)}
        >
          {step > 1 ? "Completed" : "Step 2"}
        </div>
        <div
          className={`step ${step === 2 && "step__active"}`}
          onClick={() => setStep(2)}
        >
          {step > 2 ? "Completed" : "Result"}
        </div>
      </div>
      <form className="form">
        <div className="form__header">
          <h2>GiveWP</h2>
          <img alt="img" src="image" />
        </div>
        {/* Step 1 */}
        {step === 0 ? (
          <>
            <div className="form__group">
              <div className="form__label">First Name:</div>
              <div className="form__group__wrapper">
                <div className="form__input">First Name</div>
              </div>
            </div>
            <div className="form__group">
              <label className="form__label">Last Name:</label>
              <div className="form__group__wrapper">
                <input className="form__input" placeholder="Last name" />
              </div>
            </div>
            <div className="form__group">
              <div className="form__label">Email:</div>
              <div className="form__group__wrapper">
                <div className="form__input">Email</div>
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            {" "}
            <div className="form__group">
              <div className="form__label">Card Number::</div>
              <div className="form__group__wrapper">
                <div className="form__input">xxxx-xxxx-xxxx-xxxx</div>
              </div>
            </div>
            <div className="form__group">
              <label className="form__label">Exp. Date:</label>
              <div className="form__group__wrapper">
                <div className="form__input">Exp. Date</div>
              </div>
            </div>
            <div className="form__group">
              <div className="form__label">cvv:</div>
              <div className="form__group__wrapper">
                <div className="form__input">cvv:</div>
              </div>
            </div>{" "}
          </>
        )}

        {/* Step 2 */}

        <div id="form__button" onClick={() => updateSteps()}>
          Next Step
        </div>
      </form>
    </div>
  );
}
