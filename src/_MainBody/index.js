import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class MainBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="app--main-body" data-testid="main-body-test-id">
        {this.props.children}
      </main>
    );
  }
}

MainBody.propTypes = {
  children: PropTypes.element,
};

export default MainBody;
