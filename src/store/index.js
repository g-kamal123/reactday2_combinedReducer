// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { addcontactslice } from "../actions/Addcontact-slice";
// import { ShowcontactSlice } from "../actions/Showcontact-slice";
import { addcontactReducer } from "../actions/Addcontact-slice";
import { createStore } from "redux";
import { showcontactReducer } from "../actions/Showcontact-slice";
import { combineReducers } from "redux";

// const Store = configureStore({
//     reducer:{
//         contact:addcontactslice.reducer,
//         view:ShowcontactSlice.reducer
//     }
// })
// export default Store

const allreducer = combineReducers({
  addcontactReducer,
  showcontactReducer,
});
console.log(allreducer);
export const Cstore = createStore(
  allreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
