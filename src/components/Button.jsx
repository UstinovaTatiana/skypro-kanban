import React from "react";

const BaseButton = ({
  onClick,
  type = "primary",
  fullWidth = false,
  className = "",
  id,
  text,
}) => {
  const classNames = [
    "modal__btn-signup-ent",
    type === "secondary" ? "secondary" : "",
    fullWidth ? "full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button id={id} onClick={onClick} className={classNames} type="button">
      {text}
    </button>
  );
};

export default BaseButton;
