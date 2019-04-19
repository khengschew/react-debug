import React from 'react';
import PropTypes from 'prop-types';

const ToDoListItem = (props) => {
    <li onClick={props.deleteItem} data-name={props.item}>
      {item}
    </li>
};

ToDoListItem.propTypes = {
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ToDoListItem;
