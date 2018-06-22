const material = (state = {}, action) => {
  switch (action.type) {
    case 'SET':
      return { ...action.material };
    default:
      return state;
  }
};

export default material;