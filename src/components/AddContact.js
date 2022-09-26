import React, { useRef } from "react";
import classes from '../styles/AddContact.module.css'
import { useDispatch } from "react-redux";
// import { addcontactActions } from "../actions/Addcontact-slice";
import { v4 as uuid } from "uuid";
// import { addcontactReducer } from "../actions/Addcontact-slice";

const AddContact = () => {
  const resetForm = useRef()
  const dispatch = useDispatch();
  // const data = useSelector(state=>state.addcontactReducer.all)
  // console.log(data)
  const formHandler = (event) => {
    event.preventDefault();
    const id = uuid();
    const fname = event.target[0].value;
    const lname = event.target[1].value;
    const phone = event.target[2].value;
    // dispatch(addcontactActions.addcontactHandler({
    //   id,
    //   fname,
    //   lname,
    //   phone
    // }))
    dispatch({
      type: "Add",
      payload: { id, fname, lname, phone },
    });
    resetForm.current.reset();
  };
  return (
    <div className={classes.addcontact}>
      <h2>Add Contact</h2>
      <form ref={resetForm} onSubmit={formHandler}>
        <input placeholder="first name" required/>
        <input placeholder="last name" required/>
        <input placeholder="phone ex: 1234567890" required pattern="[0-9]{10}" minLength={10} maxLength={10}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddContact;
