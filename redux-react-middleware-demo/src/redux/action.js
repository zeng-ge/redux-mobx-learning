export const addTodo = () => ({ type: 'addTodo' });
export const removeTodo = () => ({ type: 'removeTodo' });

export const returnFunction = () => () => ({ type: 'addTodo' });
export const returnPromise = () => {
  return new Promise(resole => {
    setTimeout(() => {
      resole({type: 'addTodo'});
    }, 2000)
  })
}