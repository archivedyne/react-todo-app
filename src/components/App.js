import React from 'react';
import AppBar from 'material-ui/AppBar';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

require('../style.css');

export default class extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="My AppBar" />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

