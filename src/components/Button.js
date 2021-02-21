import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, buttonName, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
      <p>{buttonName}</p>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  buttonName: PropTypes.string,
  classes: PropTypes.string,
};

export default Button;
