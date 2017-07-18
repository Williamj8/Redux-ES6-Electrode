import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        
        {
          this.props.todos.map(function (todo) {
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