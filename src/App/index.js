import React from "react";
import "./styles.scss";
import Header from "../_Header/index";
import MainBody from "../_MainBody/index";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <MainBody>
        </MainBody>
      </>
    );
  }
}
