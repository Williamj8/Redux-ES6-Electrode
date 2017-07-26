var actions = {

  addTodo: function (text) {
    return {
      type: 'ADD_TODO',
      text: text
    };
  },

  editTodo: function (id, data) {
    return {
      type: 'EDIT_TODO',
      modalType: 'DELETE_POST',
      id: id,
      text: data
    };
  },
    
  deleteTodo: function (id) {
    return {
      type: 'DELETE_TODO',
      id: id
    };
  },

  completeTodo: function (id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    };
  }  
};

module.exports = actions;