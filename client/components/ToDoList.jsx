import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './ToDoListItem';

// Fix: Stateful components will initialize once with props, but functional components will update with new props
const ToDoList = (props) => (
  <div>
    {/* Fix: Add a key prop with a unique ID to remove warnings when dynamically generating components */}
    <ul>
      {props.list.map((item, index) => <ToDoListItem item={item} deleteItem={props.deleteItem} key={index} />)}
    </ul>
  </div>
);

ToDoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  deleteItem: PropTypes.func,
};

export default ToDoList;
