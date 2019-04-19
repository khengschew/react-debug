import React from 'react';
import PropTypes from 'prop-types';
import ToDoListItem from './ToDoListItem';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: props.list,
      deleteItem: props.deleteItem,
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item) => <ToDoListItem item={item} deleteItem={this.state.deleteItem} />)}
        </ul>
      </div>
    );
  }
};

ToDoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  deleteItem: PropTypes.func,
};

export default ToDoList;
