import React from "react";
// import PropTypes from "prop-types";
import VideoTheatre from "../_VideoTheatre";
import VideoCarousel from "../_VideoCarousel/index";
import CarouselWindow from "../_VideoCarousel/CarouselWindow";
import CarouselSlider from "../_VideoCarousel/CarouselSlider";
import { PreviousButton, NextButton } from "../components/Buttons";
// import { ChevronLeft, ChevronRight } from "../components/Icons";
import "./styles.scss";

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMostThumb: 0,
      rightMostThumb: 0,
      selectedVideo: 0,
      totalVideos: 0,
      visibleThumbs: 0,
      carouselSlideWidth: 0,
      carouselSlidePos: 0,
    };

    this.slideToNextVideo = this.slideToNextVideo.bind(this);
    this.setSlidePos = this.setSlidePos.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  setSlidePos(leftPos) {
    this.setState({ carouselSlidePos: leftPos });
  }

  getPrevious() {
    console.log("previous logic goes here...");
  }

  getNext() {
    console.log("next logic goes here...");
  }

  slideToNextVideo() {
    console.log("whatev");
  }

  render() {
    const {
      leftMostThumb,
      rightMostThumb,
      selectedVideo,
      carouselSlideWidth,
      carouselSlidePos,
      // setSlidePos,
    } = this.state;

    // const { slideToNextVideo } = this;

    return (
      <section id="video-container" data-testid="video-container-test-id">
        <VideoTheatre provided={selectedVideo} />
        <VideoCarousel provided={{ leftMostThumb, rightMostThumb }}>
          <PreviousButton provided={{ onClick: this.getPrevious }} />
          <CarouselWindow>
            <CarouselSlider
              provided={{ carouselSlideWidth, carouselSlidePos }}
            />
          </CarouselWindow>
          <NextButton provided={{ onClick: this.getNext }} />
        </VideoCarousel>
      </section>
    );
  }
}

// VideoContainer.propTypes = {
//   children: PropTypes.element,
// };

export default VideoContainer;
