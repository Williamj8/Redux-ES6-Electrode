import React from 'react';
import custom from "../styles/custom.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = { editing: false};
  }

  handleCompleted() {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleEdit(event){ 
    this.setState({
      editing: true
    });
  }

  handleEditingDone(event){
    if(event.keyCode === 13){
       this.props.todo.text = event.target.value;
       this.setState({editing:false});
    }
  }


  render() {


    var textStyle = this.renderTextStyle();
      var editStyle = {};
    if(this.state.editing){
      textStyle.display = 'none';
    }
    else{
      editStyle.display = 'none';
    }

    return (
      <ul className={custom.textArea}>
        <li>
          <div style={textStyle}>
            {this.props.todo.text}
          </div>
           <input 
           type="text" 
           onKeyDown={this.handleEditingDone.bind(this)} 
           style={editStyle} 
           defaultValue={this.props.todo.text}/>
          <button className={custom.btnB} onClick={this.handleCompleted}>{this.props.todo.status}</button>
          <button className={custom.btnC} onClick={this.handleDelete}>delete</button>
          <button className={custom.btnC} onClick={this.handleEdit}>edit</button>
        </li>
      </ul>
    )
  }

  renderTextStyle() {
    return {
      color: this.props.todo.completed ? 'lightgrey' : 'black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }
}

export default TodoItem;