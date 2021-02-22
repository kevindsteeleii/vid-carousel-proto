import React from "react";
import "./styles.scss";
import { HeartSolidIcon } from "../components/Icons";

const Index = () => {
  return (
    <footer className="footer-container" data-testid="footer-test-id">
      <p className="footer-credits-me">
        Made with&nbsp;
        <span className="footer-icon--heart-wrapper">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <HeartSolidIcon classNames="footer-credits--heart" />
        </span>
        by{" "}
        <a
          href="https://www.linkedin.com/in/kevindsteeleii/"
          rel="noreferrer"
          target="_blank"
        >
          Kevin D. Steele II
        </a>
      </p>
    </footer>
  );
};

export default Index;
