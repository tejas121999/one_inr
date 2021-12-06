import React from "react";

const ErrorValidation = ({ touched, message }) => {
  if (!touched) {
    return <div className="form-message invalid">&nbsp;</div>;
  }
  if (message) {
    return (
      <div
        className="form-message invalid"
        style={{ color: "red", fontSize: "10px" }}
      >
        {message}
      </div>
    );
  }
  return <div className="form-message valid">&nbsp;</div>;
};

export default ErrorValidation;
