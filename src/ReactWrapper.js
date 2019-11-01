/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";

export default {
  name: "ReactWrapper",

  props: ["child"],

  mounted() {
    if (this.child) {
      ReactDOM.render(this.child, this.$refs.mount);
    }
  },

  render(h) {
    return h(
      "div",
      {
        ref: "mount"
      },
      []
    );
  }
};
