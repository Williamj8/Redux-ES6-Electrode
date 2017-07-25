// // Iterates over all todo and get the max index value. amd adds a 1 to it and -1 is the  default value
// //  passed to maxid  index during iteration.so get id will  return the max possibe index value and 1
//     Math.max todo.id, maxId
//   , -1 + 1;and max will returnthe max of max id and the current array 
// //   to it for
// //   new todo DataTransferItem.


const getId = (state) => {
  return state.todos.reduce( (maxId, todo)=> {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

const reducer = (state, action)=> {

  switch (action.type) {

    case 'ADD_TODO':
      return {
        ...state,
        todos: [{
          id: getId(state),
          completed: false,
          text: action.text,
          status: "Work incompleted"
        }, ...state.todos]
      };



    case 'DELETE_TODO':

      return {
        ...state,
        todos: state.todos.filter( (todo)=> {
          return todo.id !== action.id
        })
      };



    case 'COMPLETE_TODO':
      console.log(action.id);
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            var newobj = { completed: !todo.completed };
            if (todo.status == "Work incompleted") {
              newobj["status"] = "Work completed";
            }
            else {
              newobj["status"] = "Work incompleted";
            }
            return Object.assign({}, todo, newobj);
          }
          else {
            return todo;
          }
        })
      };



     case 'EDIT_TODO':
      console.log(action.id);
      return {
        ...state,
        todos: state.todos.map(function (todo) {
          if(todo.id === action.id) {
            var newobj = {l};
            newobj["text"] = "toggle completed";
            return Object.assign({}, todo, newobj);
            
          }
          else {
            return todo;
          }
        })
      };

    default:
      return state;
  }
};

export default reducer;
