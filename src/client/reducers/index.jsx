// // Iterates over all todo and get the max index value. amd adds a 1 to it and -1 is the  default value
// //  passed to maxid  index during iteration.so get id will  return the max possibe index value and 1
//     Math.max todo.id, maxId
//   , -1 + 1;and max will returnthe max of max id and the current array 
// //   to it for
// //   new todo DataTransferItem.


var getId = function (state) {
  console.log("getid:", localStorage.getItem('todos'));
  return JSON.parse(localStorage.getItem('todos')).reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
};

var reducer = function (state, action) {
  
  switch (action.type) {

    case 'ADD_TODO':
      var todos_obj = Object.assign({}, state, {
        todos: [{
          id: getId(state),
          completed: false,
          text: action.text,
          status: "toggle incompleted"
        }, ...JSON.parse(localStorage.getItem('todos'))]});
      console.log("ADD_TODO:",JSON.stringify(todos_obj));
      localStorage.setItem('todos', JSON.stringify(todos_obj.todos));
      return todos_obj;
      

    case 'DELETE_TODO':
      var todos_obj= Object.assign({}, state, {
        todos: JSON.parse(localStorage.getItem('todos'))
        .filter(function (todo) {
          return todo.id !== action.id
        })
      });
      localStorage.setItem('todos', JSON.stringify(todos_obj.todos));
      return todos_obj;
      

    case 'EDIT_TODO':
      console.log(action.id);
      console.log(action.text);
      var todos_obj = Object.assign({}, state, {
        todos: state.todos.map(function (todo) {
          if(todo.id === action.id) {
            var newobj = {};
            newobj["text"] = action.text;
            return Object.assign({}, todo, newobj);
          }
          else {
            return todo;
          }
        })
      });
      console.log(todos_obj);
      localStorage.setItem('todos', JSON.stringify(todos_obj.todos));
      return todos_obj;

    case 'COMPLETE_TODO':
      console.log(action.id);
      var todos_obj =Object.assign({}, state, {
        todos: state.todos.map(function (todo) {
          if(todo.id === action.id){
            var newobj = {completed: !todo.completed};           
            if(todo.status == "toggle incompleted") {
              newobj["status"] = "toggle completed";
            }
            else{
              newobj["status"] = "toggle incompleted";
            }
            return Object.assign({}, todo, newobj);
         }
          else {
            return todo;
          }
        })
      });
      localStorage.setItem('todos', JSON.stringify(todos_obj.todos));
      return todos_obj;

    default: 
      return state;
  }
};

module.exports = reducer;
