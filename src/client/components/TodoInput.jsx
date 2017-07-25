import React from 'react';
import TextDisplay from './TextDisplay';
import custom from "../styles/custom.css";

class TodoInput extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.state = {
      text: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  getInitialState() {
    
    return {
      text: ''
    };
  }

  getMessage(name) {
    return `Hello ${name || ' no name given'
            }, My name is Matt`;
  }
  render() {

    return (
      <div className={custom.head}>
      
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={custom.inputA}
            placeholder="What new to do"
            autoFocus="true"
            value={this.state.text}
            onChange={this.handleChange} />
          <input
            type="submit"
            className={custom.btnAdd}
            value="Add todo" />
        </form>

        { /* <TextDisplay passedDownText={this.state.text} /> */ }

      </div>
    )
  }
}

export default TodoInput;