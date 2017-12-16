import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.hash) {
        document.querySelector(this.props.location.hash).scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default withRouter(ScrollToTop);
