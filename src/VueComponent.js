export default {
  name: "VueComponent",

  props: {
    count: {
      type: Number
    }
  },

  render(h) {
    return h("div", {}, [`Count from Vue: ${this.count}`]);
  }
};
