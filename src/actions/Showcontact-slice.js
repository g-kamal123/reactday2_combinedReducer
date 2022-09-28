const init = {
  showone: [],
};
export const showcontactReducer = (state = init, action) => {
  //contact view action
  if (action.type === "View") {
    let arr = [...state.showone];
    if (arr.length === 0) {
      arr = Array(action.payload.list.length).fill(false);
      arr[action.payload.index] = true;
    } else {
      arr[action.payload.index] = true;
    }
    return { showone: arr };
  }
  //hide contact action
  if(action.type==='closeView'){
    let arr = [...state.showone]
    arr[action.index] = false
    return {showone:arr}
  }
  return state;
};
