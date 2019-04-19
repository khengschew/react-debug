import React from 'react';
import Form from './Form';
// Fix: Files need './' to reference the current directory
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentItem: '',
    };

    // Fix: Callbacks need to be bound to component with state
    this.itemChange = this.itemChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8000/template.json')
    // Fix: Data needs to be parsed
      .then(res => res.json())
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
    // Fix: Cannot set state directly, use setState
    this.setState({
      list: this.state.list.concat([this.state.currentItem]),
      currentItem: '',
    }, () => {
      document.getElementById('addItem').value = '';
    });
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
