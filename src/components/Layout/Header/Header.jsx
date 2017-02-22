import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import styles from './Header.scss';

const Header = class Header extends Component {

  renderStats() {
    const checkedCount = this.props.todos.filter(item => item.checked).length;
    return (
      <div className={styles.titleText}>
        Total: { this.props.todos.length }
        &nbsp; - &nbsp;
        Checked: { checkedCount }
      </div>
    );
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconElementLeft={<div />}
        iconElementRight={this.renderStats()}
      />
    );
  }
};

// Redux
function mapStateToProps(state) {
  return {
    todos: state.todo.items,
    fetching: state.todo.fetching,
    fetched: state.todo.fetched,
    error: state.todo.error,
  };
}

Header.defaultProps = {
  todos: [],
};

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  todos: React.PropTypes.array,
};

export default connect(mapStateToProps)(Header);
