import React from "react";
import PropTypes from "prop-types";

export const ChevronLeft = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={iconColor}
    >
      <path
        fillRule="evenodd"
        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronLeft.defaultProps = {
  iconColor: "#000000",
};

ChevronLeft.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};

export const ChevronRight = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={iconColor}
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronRight.defaultProps = {
  iconColor: "#000000",
};

ChevronRight.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};

export const PlayIconLined = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={iconColor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

PlayIconLined.defaultProps = {
  iconColor: "#000000",
};

PlayIconLined.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};

export const PlayIconFill = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={iconColor}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

PlayIconFill.defaultProps = {
  iconColor: "#000000",
};

PlayIconFill.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};

export const VideoCameraSolidIcon = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={iconColor}
    >
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>
  );
};

VideoCameraSolidIcon.defaultProps = {
  iconColor: "#000000",
};

VideoCameraSolidIcon.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};

export const HeartSolidIcon = ({ iconColor, classNames }) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill={iconColor}
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
};

HeartSolidIcon.defaultProps = {
  iconColor: "#000000",
};

HeartSolidIcon.propTypes = {
  iconColor: PropTypes.string,
  classNames: PropTypes.string,
};
