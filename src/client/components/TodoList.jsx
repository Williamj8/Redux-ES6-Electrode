import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props){
    super(props);
    console.log(JSON.parse(localStorage.getItem('todos')));
  }

  render() {

    return (
      <div>
        
        {
          JSON.parse(localStorage.getItem('todos')).map(function (todo) {
            return (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={this.props.actions.deleteTodo} 
                completeTodo={this.props.actions.completeTodo}
                editTodo={this.props.actions.editTodo}/>
            )
          }.bind(this))
        }
        
      </div>
    )
  }
}

export default TodoList;