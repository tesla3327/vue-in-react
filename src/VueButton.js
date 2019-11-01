export default {
  name: "VueButton",

  props: {
    text: {
      type: String
    }
  },

  render(h) {
    return h(
      "button",
      {
        on: {
          click: () => {
            this.$emit("click");
          }
        }
      },
      [this.$slots.default]
    );
  }
};
