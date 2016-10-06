import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../constraints/filter';

// フィルタリング状態によってTODOリストの絞り込みを行う
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
};

// StateをViewのプロパティに落としこむ
const mapStateToProps = (state, ownPorps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

// つなぎこみ
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); //ViewにはReact.jsで用意したTodoListを使用する

export default VisibleTodoList;
