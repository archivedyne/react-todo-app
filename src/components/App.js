import React, { Component } from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import AppBar from 'material-ui/AppBar';

require("../style.css");

export default class extends Component {
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

      //<div className={styles.hogeHoge}>
