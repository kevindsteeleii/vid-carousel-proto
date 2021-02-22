import React from "react";
import PropTypes from "prop-types";

const CarouselSlider = ({ children, provided }) => {
  const { carouselSlideWidth, carouselSlidePos } = provided;

  return (
    <div
      style={{
        left: carouselSlidePos === 0 ? "0px" : -1 * carouselSlidePos + "px",
      }}
      data-slide-width={carouselSlideWidth}
      className="video-carousel-slider"
      data-testid="video-carousel-slider-test-id"
    >
      {children}
    </div>
  );
};

const getMockChildren = (cap) => {
  const arr = [];
  for (let i = 0; i < cap; i++) {
    arr.push(String.fromCharCode(i));
  }

  return (
    <React.Fragment>
      {arr.map((item, idx) => (
        <div
          key={`${item}-${idx}`}
          style={{
            width: "200px",
            minWidth: "200px",
            height: "100%",
            display: "inline-flex",
            borderRadius: "5px",
            backgroundColor: "var(--footer-bg)",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mock-thumb"
        >
          <p
            style={{
              color: "var(--white)",
              textAlign: "center",
            }}
          >
            Sample Thumb
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

CarouselSlider.defaultProps = {
  children: getMockChildren(3),
};

CarouselSlider.propTypes = {
  children: PropTypes.node,
  provided: PropTypes.object,
};

export default CarouselSlider;
