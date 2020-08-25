import React from "react";
import { removeFeature } from "../actions/actions";
import { connect } from "react-redux";

const AddedFeature = (props) => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        Remove
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
