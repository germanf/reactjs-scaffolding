import React, { Component } from 'react';
import { Card, CardActions, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionInfoOutline from 'material-ui/svg-icons/action/info-outline';
import IconButton from 'material-ui/IconButton';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, addTodo, checkTodo, deleteTodo } from '../../redux/actions/todoActions';

 // Internal components
import NewTodoModal from './NewTodoModal/NewTodoModal';
import styles from './Todo.scss';

const Todo = class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNewTodo: false,
    };
  }

  componentWillMount() {
    // Dispach action to todoReducer
    this.props.fetchTodos();
  }

  handleNewTodoOpen() {
    this.setState({ openNewTodo: true });
  }

  handleNewTodoClose() {
    this.setState({ openNewTodo: false });
  }

  handleCheckItem(id) {
    // Dispach action to todoReducer
    this.props.checkTodo(id);
  }

  handleDeleteItem(id) {
    // Dispach action to todoReducer
    this.props.deleteTodo(id);
  }

  handleNewTodoSave(newItem) {
    const { todos } = this.props;
    const result = todos.filter(item => item.name === newItem);

    if (result.length > 0) {
      return 'Item already added.';
    }

    // Dispach action to todoReducer
    this.props.addTodo(newItem);
    return null;
  }

  renderTodos() {
    let todos = '';

    if (this.props.fetching) {
      todos = (
        <div className={styles.center}>
          <CircularProgress />
        </div>
      );
    } else if (this.props.todos.length === 0) {
      todos = (
        <div className={styles.center}>
          <ActionInfoOutline className={styles.iconNoItems} />
          <div> No items </div>
        </div>
      );
    } else {
      todos = (
        <List>
          { this.props.todos.map(item =>
            <span key={item.name} className={item.checked ? styles.checkedItem : {}}>
              <ListItem
                leftCheckbox={
                  <Checkbox
                    checked={item.checked}
                    onCheck={() => this.handleCheckItem(item.id)}
                  />
                }
                primaryText={item.name}
                rightIconButton={
                  <IconButton tooltip="Delete item" onClick={() => this.handleDeleteItem(item.id)}>
                    <ActionDelete />
                  </IconButton>
                }
              />
            </span>,
          )}
        </List>
      );
    }
    return todos;
  }

  render() {
    return (
      <div>
        <Card>
          <CardText expandable={false}>
            { this.renderTodos() }
          </CardText>
          <CardActions>
            <RaisedButton
              label="Add"
              fullWidth
              onClick={e => this.handleNewTodoOpen(e)}
            />
          </CardActions>
        </Card>

        <NewTodoModal
          open={this.state.openNewTodo}
          handleSave={item => this.handleNewTodoSave(item)}
          handleClose={e => this.handleNewTodoClose(e)}
        />
      </div>
    );
  }
};


// Redux
const mapStateToProps = (state) => {
  const props = {
    todos: state.todo.items,
    fetching: state.todo.fetching,
    fetched: state.todo.fetched,
    error: state.todo.error,
  };

  return props;
};

const mapDispatchToProps = (dispatch) => {
  const props = {
    fetchTodos: bindActionCreators(fetchTodos, dispatch),
    addTodo: bindActionCreators(addTodo, dispatch),
    checkTodo: bindActionCreators(checkTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
  };

  return props;
};

Todo.defaultProps = {
  fetchTodos: () => {},
  checkTodo: () => {},
  deleteTodo: () => {},
  todos: [],
  addTodo: () => {},
  fetching: false,
};

Todo.propTypes = {
  fetchTodos: React.PropTypes.func,
  checkTodo: React.PropTypes.func,
  deleteTodo: React.PropTypes.func,
  todos: React.PropTypes.array,
  addTodo: React.PropTypes.func,
  fetching: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
