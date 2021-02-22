import React from "react";
import PropTypes from "prop-types";

const CarouselWindow = ({ children }) => {
  console.log("carouselWindow children: ", children);

  return (
    <div
      className="video-carousel-window"
      data-testid="video-carousel-window-test-id"
    >
      {children}
    </div>
  );
};

CarouselWindow.propTypes = {
  children: PropTypes.element,
};

export default CarouselWindow;
