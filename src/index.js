import "./index.scss";
import { useState, useEffect } from "react";
import {
  InspectorControls,
  useBlockProps,
  RichText,
  MediaPlaceholder,
} from "@wordpress/block-editor";
import {
  Panel,
  PanelBody,
  CheckboxControl,
  TextControl,
  Spinner,
} from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  apiVersion: 2,
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    title: { type: "String" },
    id: { type: "number" },
    alt: { type: "string" },
    url: { type: "string" },
    checkbox: { type: "Boolean" },
  },
  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent({ attributes, setAttributes }) {
  const { title, url, alt, checkbox } = attributes;
  const [step, setStep] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // Updates Title of the form.
  function updateTitle(newTitle) {
    setAttributes({ title: newTitle });
  }

  // Allows Images to be selected for upload - resets attributes if any errors.
  function onSelectImage(image) {
    console.log(image);
    if (!image || !image.url) {
      setAttributes({ url: undefined, id: undefined, alt: "" });
      return;
    }
    setAttributes({ url: image.url, id: image.id, alt: image.alt });
  }

  console.log(attributes);

  // Allows Image urls to be selected for upload.
  function onSelectUrl(newURL) {
    setAttributes({
      url: newURL,
      id: undefined,
      alt: "",
    });
  }

  // Updates checkbox status.
  useEffect(() => {
    setAttributes({ checkbox: isChecked });
  }, [isChecked]);

  return (
    <section {...useBlockProps()}>
      {/* Sidebar/settings controls. */}
      <InspectorControls>
        <Panel>
          <PanelBody title="Form Settings">
            <TextControl label="Title" value={title} onChange={updateTitle} />
            <CheckboxControl
              label="Allow anonymous donations"
              checked={isChecked}
              onChange={setIsChecked}
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
      {/* Block editor component for image uploading. */}
      <MediaPlaceholder
        className="form__img"
        icon="Admin-users"
        onSelect={onSelectImage}
        onSelectURL={onSelectUrl}
        onError={(error) => console.log(error)}
        accept="image/*"
        allowedTypes={["image"]}
        diableMediaButtons={url}
      />
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
        <div className="form__title">
          {/* Block editor component for the title of the form. */}
          <RichText
            className="form__title__input"
            placeholder="Your Form Title Here *"
            tagName="h2"
            value={title}
            onChange={updateTitle}
          />
          {url && (
            <div className="form__img__container">
              <img className="form__img" src={url} alt={alt} />
              {isBlobURL(url) && <Spinner className="form__img__spinner" />}
            </div>
          )}
        </div>

        <>
          <div className="form__group">
            <div className="form__label">First Name:</div>
            <div className="form__group__wrapper">
              <input
                className="form__input"
                placeholder="Placeholder"
                disabled={true}
              />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label">Last Name:</label>
            <div className="form__group__wrapper">
              <input
                className="form__input"
                placeholder="Placeholder"
                disabled={true}
              />
            </div>
          </div>
          <div className="form__group">
            <div className="form__label">Email:</div>
            <div className="form__group__wrapper">
              <input
                className="form__input"
                placeholder="Placeholder"
                disabled={true}
              />
            </div>
          </div>
        </>

        <button id="form__button" type="button">
          Next Step
        </button>
      </form>
    </section>
  );
}
