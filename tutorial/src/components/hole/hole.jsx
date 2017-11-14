import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import holeMask from 'assets/img/hole-mask.svg';
import './hole.scss';

class Hole extends Component {
  render () {
    let frogClass = 'frog';

    if (this.props.active) {
      frogClass = 'frog up';
    }

    return (
      <div className="hole-container">
        <div className="hole">
          <div className={frogClass}></div>
          <img src={holeMask} className='hole-mask' />
        </div>
      </div>
    );
  }
}

Hole.propTypes = {
  active: PropTypes.bool.isRequired
};

export default Hole;
