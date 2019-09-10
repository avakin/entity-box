import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./OnlineStatus.less";

const OnlineStatus = ({ isConnected }) => {
  return (
    <div className="status holder">
      <div
        title="Connection status"
        className={classnames({
          indicator: true,
          online: isConnected
        })}
      />
    </div>
  );
};

OnlineStatus.propTypes = {
  isConnected: PropTypes.bool
};

export default OnlineStatus;
