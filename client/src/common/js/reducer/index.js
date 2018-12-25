import React from "react";
import PropTypes from "prop-types";
import {injectReducer, removeReducer} from "./utils";

const InjectReducer = reducer => WrappedComponent => {
  class InjectReducer extends React.Component {
    componentWillMount() {
      console.log("reducer");
      console.log(reducer);
      console.log(this.context);
      console.log(this.props);
      injectReducer(this.props.store, reducer);
    }
    componentWillUnmount() {
      removeReducer(this.props.store, reducer);
    }
    render() {
      return React.createElement(WrappedComponent, this.props);
    }
  }
  InjectReducer.contextTypes = {
    store: PropTypes.shape({replaceReducer: PropTypes.func.isRequired})
  };
  return InjectReducer;
};
export default InjectReducer;
