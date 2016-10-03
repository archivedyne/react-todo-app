import React, { PropTypes } from 'react';

// Todoの実体は<li>~</li>
export default class extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
        >
        {this.props.text}
      </li>
    );
  }
}
