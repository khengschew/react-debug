import React from 'react';
import PropTypes from 'prop-types';

// Fix: Using {} requires a return statement
const ToDoListItem = (props) => (
    <li onClick={props.deleteItem} data-name={props.item}>
      {/* Fix: Preface props arguments with 'props.' */}
      {props.item}
    </li>
);

ToDoListItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ToDoListItem;
