import React, { PropTypes } from 'react';
import Todo from './Todo';

// TodoListの実体は<ul>~</ul>
// リストの中の<li>~</li>はTodoコンポーネントを使用している
export default class extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

