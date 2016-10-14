import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { addTodo } from '../actions';

class AddTodo extends React.Component {

  static defaultProps = {}

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  state = {
    textFieldValue: '',
  }

  render() {
    return (
      <form>
        <TextField
          hintText="ここにタスクを入力"
          ref="textField"
          value={this.state.textFieldValue}
          onChange={this._handleTextFieldChange}
          onKeyPress={this._handleKeyPress}
        />
        <RaisedButton
          label="Add"
          onClick={this._handleClick}
        />
      </form>
    );
  }

  _handleKeyPress(e) {
    const ENTER = 13;
    if (e.which === ENTER) {
      e.preventDefault();
      this._handleClick();
      return;
    }
  }

  _handleTextFieldChange(e) {
    e.preventDefault();
    this.setState({
      textFieldValue: e.target.value,
    });
  }

  _handleClick() {
    if (!this.state.textFieldValue) return;
    this.props.dispatch(addTodo(this.state.textFieldValue));
    this.setState({
      textFieldValue: '',
    });
  }

}

export default connect()(AddTodo);

