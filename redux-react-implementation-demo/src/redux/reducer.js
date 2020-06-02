const defaultTodoState = {
  count: 0
};

export const todo = function(state = defaultTodoState, action){
  switch(action.type){
    case 'addTodo':
      state = { ...state, count: state.count + 1};
      break;
    case 'removeTodo':
      state = { ...state, count: state.count - 1};
      break;
  }
  return state;
}