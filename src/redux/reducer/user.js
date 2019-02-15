const user = (state = [], action) => {
  switch (action.type) {
  case 'LOGIN':
    return [
      ...state,
      action.user
    ];
  default:
    return state;
  }
};

export default user;