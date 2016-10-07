import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class AddTodo extends React.Component {

  // static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {textFieldValue: ''};
  }

  render() {
    return (
      <form>
        <TextField
          hintText="ここにタスクを入力してください"
          ref="textField"
          value={this.state.textFieldValue}
          onChange={this._handleTextFieldChange.bind(this)}
          onKeyPress={this._handleKeyPress.bind(this)}
        />
        <FlatButton
          label="Addっしょ"
          onClick={this.handleClick.bind(this)}
        />
      </form>
    );
  }

  _handleKeyPress(e) {
    const ENTER = 13
    if (e.which === ENTER ) {
      e.preventDefault()
      return this.handleClick();
    }
  }

  _handleTextFieldChange(e) {
    e.preventDefault()
    this.setState({
      textFieldValue: e.target.value
    });
  }

  handleClick() {
    if (!this.state.textFieldValue) { return }
    this.props.dispatch(addTodo(this.state.textFieldValue))
    this.setState({
      textFieldValue: ""
    });
  }

}

export default connect()(AddTodo);

