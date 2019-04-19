import React from 'react';

const Form = (props) => (
  <div>
    <input type="text" id="addItem" onChange={props.onChange}></input>
    <button onClick={props.onClick}>Add</button>
  </div>
);

export default Form;
