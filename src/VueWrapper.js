import React from "react";
import PropTypes from "prop-types";
import Vue from "vue";
import ReactWrapper from "./ReactWrapper";

class VueWrapper extends React.Component {
  componentDidUpdate() {
    this.updateInternals();
  }

  componentDidMount() {
    const component = this.props.component;

    this.updateInternals(true);

    this._vue = new Vue({
      el: this._el,
      render: h => {
        return h(
          component,
          {
            props: { ...this._reactive },
            on: { ...this.eventHandlers() },
            class: { ...this.className }
          },
          [
            React.Children.map(this.props.children, child => {
              return h(
                ReactWrapper,
                {
                  props: {
                    child
                  }
                },
                []
              );
            })
          ]
        );
      }
    });
  }

  eventHandlers() {
    const handlers = {};

    for (let handler in this._handlers) {
      const name = handler.substring(2).toLocaleLowerCase();
      handlers[name] = () => this._handlers[handler]();
    }

    return handlers;
  }

  updateInternals(init = false) {
    if (init) {
      this._handlers = {};
      this._reactive = {};
    }

    for (let prop in this.props) {
      if (prop.startsWith("on")) {
        this._handlers[prop] = this.props[prop];
      } else {
        this._reactive[prop] = this.props[prop];
      }
    }

    if (init) {
      this._reactive = Vue.observable({ ...this._reactive });
    }
  }

  render() {
    return <div ref={ref => (this._el = ref)} />;
  }
}

VueWrapper.propTypes = {
  component: PropTypes.object.isRequired
};

export default VueWrapper;
