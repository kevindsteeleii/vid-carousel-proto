import React from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "./Icons";

export const Button = ({ onClick, buttonName, classes }) => {
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

const ButtonWIcon = ({ onClick, buttonName, classes, children }) => {
  return (
    <button onClick={onClick} className={classes}>
      <p>{buttonName}</p>
      {children}
    </button>
  );
};

ButtonWIcon.propTypes = {
  onClick: PropTypes.func,
  buttonName: PropTypes.string,
  classes: PropTypes.string,
  children: PropTypes.element,
  // imgSrc: PropTypes.string,
  // imgAlt: PropTypes.string,
};

export const PreviousButton = ({ provided }) => {
  const { onClick } = provided;
  return (
    <ButtonWIcon
      classes="previous-button"
      buttonName="Previous"
      onClick={onClick}
    >
      <ChevronLeft
        iconColor="var(--white)"
        classNames="previous-btn--chevron"
      />
    </ButtonWIcon>
  );
};

PreviousButton.propTypes = {
  provided: PropTypes.object,
};

export const NextButton = ({ provided }) => {
  const { onClick } = provided;
  return (
    <ButtonWIcon classes="next-button" buttonName="Next" onClick={onClick}>
      <ChevronRight iconColor="var(--white)" classNames="next-btn--chevron" />
    </ButtonWIcon>
  );
};

NextButton.propTypes = {
  provided: PropTypes.object,
};
