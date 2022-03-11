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
  // apiVersion: 2,
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    title: { type: "string" },
    img: { type: "string" },
    checked: { type: "" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent({ attributes, setAttributes }) {
  const { title } = attributes;
  const [step, setStep] = useState(0);

  function updateTitle(newTitle) {
    setAttributes({ title: newTitle });
  }

  function updateCheckedField(isChecked) {
    setAttributes({ checked: isChecked });
  }

  function updateSteps() {
    if (step <= 1) {
      return setStep(step + 1);
    } else {
      return setStep(0);
    }
  }
  return (
    <div>
      <InspectorControls>
        <Panel>
          <PanelBody title="Form Settings">
            <TextControl label="Title" value={title} onChange={updateTitle} />
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
          {step > 2 ? "Submitted" : "Result"}
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
                <div className="form__input">Last name</div>
              </div>
            </div>
            <div className="form__group">
              <div className="form__label">Email:</div>
              <div className="form__group__wrapper">
                <div className="form__input">Email</div>
              </div>
            </div>
          </>
        ) : //Step 2
        step === 1 ? (
          <>
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
            </div>
          </>
        ) : (
          //Step 3
          <h2>Result</h2>
        )}

        <div id="form__button" onClick={() => updateSteps()}>
          {step <= 1 ? "Next Step" : "Form Submitted!"}
        </div>
      </form>
    </div>
  );
}
