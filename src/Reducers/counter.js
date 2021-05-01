// Reducer -> Describes how your actions transfrom your state to the next state
const counetrReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payLoad;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counetrReducer;
