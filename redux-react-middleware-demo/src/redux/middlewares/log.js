export const createLog = options => ({getState, dispatch}) => next => action => {
  console.log(`${options.label}-${action.type}`, getState())
  next(action);
};

export default createLog({label: 'LOG'})

