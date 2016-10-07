import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTodo extends React.Component {

  static defaultProps = {}

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

  state = {
      textFieldValue: '',
  }

  constructor(props){
    super(props);
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
        <RaisedButton
          label="Addっしょ"
          onClick={this._handleClick.bind(this)}
        />
      </form>
    );
  }

  _handleKeyPress(e) {
    const ENTER = 13
    if (e.which === ENTER ) {
      e.preventDefault()
      this._handleClick();
      return
    }
  }

  _handleTextFieldChange(e) {
    e.preventDefault()
    this.setState({
      textFieldValue: e.target.value
    });
  }

  _handleClick() {
    if (!this.state.textFieldValue) { return }
    this.props.dispatch(addTodo(this.state.textFieldValue))
    this.setState({
      textFieldValue: ""
    });
  }

}

export default connect()(AddTodo);

