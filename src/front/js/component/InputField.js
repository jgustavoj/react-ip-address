import React from "react";
import "../../styles/_input-field.scss";

export const InputField = (props) => {
  return (
    <>
      <div className="input-field input-group mb-3" style={props.style}>
        <input
          type="text"
          className="form-control"
          placeholder="Seach for any IP address or domain"
        />
        <button className="btn btn-dark" type="button">
          <img src="https://res.cloudinary.com/dgiw6qnle/image/upload/v1652738291/icon-arrow_tqdlcm.svg" />
        </button>
      </div>
    </>
  );
};
