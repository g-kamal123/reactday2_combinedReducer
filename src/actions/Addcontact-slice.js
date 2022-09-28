const init = {
  all: [],
};
export const addcontactReducer = (state = init, action) => {
  //add action
  if (action.type === "Add") {
    return { all: [...state.all, action.payload] };
  }
  //del action
  if (action.type === "Del") {
    return { all: state.all.filter((item) => item.id !== action.data.id) };
  }
  return state;
};
