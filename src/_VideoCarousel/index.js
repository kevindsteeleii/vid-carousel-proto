import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }

  test() {
    // const { slideToNextVideo } = this.props.provided;
    // console.log(slideToNextVideo());
  }

  render() {
    const { children } = this.props;
    return (
      <div
        onClick={this.test}
        className="video-carousel-container"
        data-testid="video-carousel-test-id"
      >
        <span className="carousel-name-tag">Video Carousel</span>
        {children}
      </div>
    );
  }
}

VideoCarousel.propTypes = {
  provided: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element),
};
export default VideoCarousel;
