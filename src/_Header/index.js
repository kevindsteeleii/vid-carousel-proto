import React from "react";
import "./styles.scss";
import { VideoCameraSolidIcon } from "../components/Icons";

const Header = () => {
  return (
    <header className="project-header" data-testid="header-test-id">
      <span className="header-title">Video Carousel</span>
      <VideoCameraSolidIcon classNames="header-vid-icon" iconColor="#f1f8ff" />
    </header>
  );
};

export default Header;
