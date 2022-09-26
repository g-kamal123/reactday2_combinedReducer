// import { createSlice } from "@reduxjs/toolkit";

// export const addcontactslice = createSlice({
//     name:'add',
//     initialState:{
//         allcontact:[]
//     },
//     reducers:{
//         addcontactHandler(state,action){
//             state.allcontact.push(action.payload)
//         },
//         deletecontactHandler(state,action){
//             let arr = state.allcontact.filter((item)=>item.id!==action.payload.id)
//             state.allcontact = arr
//         }
//     }
// })
// console.log(addcontactslice)
// // console.log(addcontactslice.actions)
// export const addcontactActions = addcontactslice.actions
const init = {
  all: [],
};
export const addcontactReducer = (state = init, action) => {
  if (action.type === "Add") {
    return { all: [...state.all, action.payload] };
  }
  if (action.type === "Del") {
    return { all: state.all.filter((item) => item.id !== action.data.id) };
  }
  return state;
};
