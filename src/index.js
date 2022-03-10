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
  const [isChecked, setChecked] = useState(false);

  function updateTitle(event) {
    setAttributes({ title: event.target.value });
  }
  function updateCheckedField(event) {
    setAttributes({ checked: event.target.value });
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
      <form className="form">
        <div className="form__header">
          <h2>GiveWP</h2>
          <img alt="img" src="image" />
        </div>
        <div className="form__group">
          <div className="form__label">First Name:</div>
          <div className="form__group__wrapper">
            <div className="form__input">First Name</div>
          </div>
        </div>
        <div className="form__group">
          <div className="form__label">Last Name:</div>
          <div className="form__group__wrapper">
            <div className="form__input">Last Name</div>
          </div>
        </div>
        <div className="form__group">
          <div className="form__label">Email:</div>
          <div className="form__group__wrapper">
            <div className="form__input">Email</div>
          </div>
        </div>
        <div id="form__button" disabled={true}>
          Next Step
        </div>
      </form>
    </div>
  );
}
