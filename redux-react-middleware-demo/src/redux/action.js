export const addTodo = () => ({ type: 'addTodo' });
export const removeTodo = () => ({ type: 'removeTodo' });

export const actiona = () => {
  return Promise.resolve('abc')
}

export const returnFunction = () => (dispatch, getState) => {
  dispatch({type: 'begin'})
  setTimeout(() => {
    dispatch({type: 'process'})
  }, 500)
  dispatch({type: 'end'})
  return { type: 'abc' }
};
export const returnPromise = () => {
  return new Promise(resole => {
    setTimeout(() => {
      resole({type: 'addTodo'});
    }, 2000)
  })
}