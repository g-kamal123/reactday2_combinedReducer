import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addcontactActions } from "../actions/Addcontact-slice";
// import { ShowcontactActions } from "../actions/Showcontact-slice";
import classes from "../styles/ContactList.module.css";
// import { showcontactReducer } from "../actions/Showcontact-slice";

const ContactList = () => {
  const list = useSelector((state) => state.addcontactReducer.all);
  const show = useSelector((state) => state.showcontactReducer.showone);
  // console.log(show)
  const dispatch = useDispatch();
  const deleteHandler = (val) => {
    // console.log(val);
    // dispatch(addcontactActions.deletecontactHandler(val));
    dispatch({
      type: "Del",
      data: val,
    });
  };
  const btnHandler = (index) => {
    // dispatch(ShowcontactActions.show({
    //   data:list,
    //   index:i
    // }))
    dispatch({
      type: "View",
      payload: { list, index },
    });
  };
  const closeView =(index)=>{
    dispatch({
      type:'closeView',
      index
    })
  }
  return (
    <div className={classes.contactlist}>
      <h2>Contact List</h2>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>
                {!show[i] && (
                  <button onClick={() => btnHandler(i)}>view</button>
                )}
                {show[i] && <span style={{cursor:'pointer'}} onClick={()=>closeView(i)}>{item.phone}</span>}
              </td>
              <td>
                <button onClick={() => deleteHandler(item)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
