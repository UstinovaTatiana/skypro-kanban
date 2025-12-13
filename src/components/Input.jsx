import React from "react";

const BaseInput = ({ className = "", ...props }) => {
  return <input className={`modal__input ${className}`.trim()} {...props} />;
};

export default BaseInput;
