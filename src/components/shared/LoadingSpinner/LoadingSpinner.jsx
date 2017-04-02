import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './LoadingSpinner.scss';

class LoadingSpinner extends Component {

  render() {
    return (
      <div className={classnames(styles.spinner, this.props.active ? styles.active : '')}>
        <svg>
          <circle cx='33' cy='33' r='30' />
        </svg>
      </div>
    );
  }
}

LoadingSpinner.propTypes = {
  active: React.PropTypes.bool
};

export default LoadingSpinner;