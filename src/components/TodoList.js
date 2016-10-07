'use strict'

import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


// TodoListの実体は<ul>~</ul>
export default class extends React.Component {

  static defaultProps = {}
  static propTypes = {
    onClickRow: React.PropTypes.func.isRequired,
    todo: React.PropTypes.array
  }

  state = {
      displaySelectAll: false,
      adjustForCheckbox: false,
      displayRowCheckbox: false
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
     <Table
      displaySelectAll={this.state.displaySelectAll}
      adjustForCheckbox={this.state.adjustForCheckbox}
      onRowSelection={this._onRowSelection.bind(this)}
     >

       <TableHeader
        displaySelectAll={this.state.displaySelectAll}
        adjustForCheckbox={this.state.adjustForCheckbox}
       >
         <TableRow>
           <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
           <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
           <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
         </TableRow>
       </TableHeader>

       <TableBody
        displayRowCheckbox={this.state.displayRowCheckbox}
       >
        {this.props.todos.map((todo, i)=>
         <TableRow
          key={i}
         >
           <TableRowColumn>{String(todo.id)}</TableRowColumn>
           <TableRowColumn>{todo.text}</TableRowColumn>
           <TableRowColumn>{String(todo.completed)}</TableRowColumn>
         </TableRow>
       )}
       </TableBody>

       <TableFooter></TableFooter>

     </Table>
    );
  }

  // MEMO:
  // 本当はtablerowcolumnに仕込みたいがbugで仕込めないため、
  // この形で処理をしている
  _onRowSelection(key) {
    if (!key.length) return;
    let id = this.props.todos[key].id;
    this.props.onClickRow(id);
  }

}

