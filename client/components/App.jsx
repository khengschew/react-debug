import React from 'react';
import Form from './Form';
import ToDoList from 'ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentItem: '',
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/template.json')
      .then(data => {
        this.setState({
          list: data.items,
        });
      });
  }

  itemChange(e) {
    this.setState({
      currentItem: e.target.value,
    });
  }

  addItem(e) {
    this.state.list.push(this.state.currentItem);
    document.getElementById('addItem').value = '';
  }

  deleteItem(e) {
    const newList = this.state.list.filter(item => e.target.dataset.name !== item);
    this.setState({
      list: newList,
    });
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <Form onChange={this.itemChange} onClick={this.addItem} />
        <ToDoList list={list} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
