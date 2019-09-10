import React from "react";
import PropTypes from "prop-types";
import OnlineStatus from "../OnlineStatus";
import Counter from "../Counter";
import "./EntityBox.less";

const EntityBox = ({ entityName, entityType, connected, count }) => {
  return (
    <div className="entity holder">
      <div title={entityType} className="type">
        {entityType}
      </div>
      <div title={entityName} className="name">
        {entityName}
      </div>
      <div className="connection">
        <OnlineStatus isConnected={connected} />
      </div>
      <div className="counter">
        <Counter count={count} />
      </div>
    </div>
  );
};

EntityBox.propTypes = {
  entityType: PropTypes.string,
  entityName: PropTypes.string,
  connected: PropTypes.bool,
  count: PropTypes.number
};

EntityBox.defaultProps = {
  entityType: "No type",
  entityName: "No name",
  connected: false,
  count: 0
};

export default EntityBox;
