// Action -> Describes what you want to do
export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payLoad: nr,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
