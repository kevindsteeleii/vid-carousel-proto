import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class MainBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="app--main-body" data-testid="main-body-test-id"></main>
    );
  }
}

// MainBody.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default MainBody;
