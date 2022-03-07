import "./index.scss";

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",

  edit: EditComponent,
  save: function () {
    return null;
  },
});

function EditComponent(props) {
  return <div className="makeUpYourBlockTypeName"></div>;
}
