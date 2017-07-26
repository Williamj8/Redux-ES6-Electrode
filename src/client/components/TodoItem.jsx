import React from 'react';
import Modal from 'react-modal';
import custom from "../styles/custom.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = { inputText: '', modalIsOpen: false, editing: false };
  }

  handleCompleted() {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  handleEdit(event) {
    //this.props.editTodo(this.props.todo.id);
    this.setState({
      editing: true
    });
  }

  handleEditingDone(event) {
    this.setState({ modalIsOpen: false });
    //if(event.keyCode === 13){//submit
    this.props.todo.text = this.state.inputText;
    this.setState({ editing: false });
    this.props.editTodo(this.props.todo.id, this.state.inputText);
    //}
  }

  openModal() {
    this.setState({
      editing: true
    });
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
  }

  closeModal() {
    //this.setState({editing:false});
    this.setState({ modalIsOpen: false });
  }

  handleChange(e) {
    console.log("e.target.value - ", e.target.value);
    this.setState({ inputText: e.target.value });
  }

  render() {


    var textStyle = this.renderTextStyle();
    var editStyle = {};
    if (this.state.editing) {
      textStyle.display = 'none';
    }
    else {
      editStyle.display = 'none';
    }

    return (
      <ul className={custom.textArea}>
        <li>
          <div style={textStyle}>
            {this.props.todo.text}
          </div>
          <button className={custom.btnB} onClick={this.handleCompleted}>{this.props.todo.status}</button>
          <button className={custom.btnC} onClick={this.handleDelete}>delete</button>
          <button className={custom.btnE} onClick={this.openModal}>edit</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Modal Dialogue">

            <div style={editStyle}>
              <input type="text"
                onChange={this.handleChange}
                style={editStyle}
                defaultValue={this.props.todo.text} />
                <br/>
                <br/>
              <button onClick={this.handleEditingDone.bind(this)}>Save</button>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
          </Modal>

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

