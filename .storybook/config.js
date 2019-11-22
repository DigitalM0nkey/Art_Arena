import { configure } from "@storybook/react";

function loadStories() {
  require("../stories");
}

configure(loadStories, module);

// automatically import all files ending in *.stories.js
// configure(require.context("../stories", true, /\.stories\.js$/), module);
