import React from "react";
import PropTypes from "prop-types";
import "./Counter.less";
const Counter = ({ count }) => {
  let countToDisplay = count > 100 ? "99+" : count;
  return <div className="counter-holder">{countToDisplay}</div>;
};

Counter.propTypes = {
  count: PropTypes.number.isRequired
};
export default Counter;
