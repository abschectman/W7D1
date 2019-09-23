
 const allTodos = function(state) { 
   debugger
  const keys = Object.keys(state.getState().todos)
  const array = keys.map(id => {
    return state.getState().todos[id] 
  });
  return array; 
}
export default allTodos; 