// import { createSlice } from "@reduxjs/toolkit";

// export const ShowcontactSlice = createSlice({
//     name:'show',
//     initialState:{
//         showone:[]
//     },
//     reducers:{
//         show(state,action){
//             let arr = [...state.showone]
//             if(arr.length===0){
//                 arr =Array(action.payload.data.length).fill(false)
//                 arr[action.payload.index] = true
//             }
//             else{
//                 arr[action.payload.index] = true
//             }
//             state.showone = arr
//         }
//     }
// })
// export const ShowcontactActions = ShowcontactSlice.actions
const init = {
  showone: [],
};
export const showcontactReducer = (state = init, action) => {
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
  if(action.type==='closeView'){
    let arr = [...state.showone]
    arr[action.index] = false
    return {showone:arr}
  }
  return state;
};
