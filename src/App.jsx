import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Zander",

      todoItems: [
        { action: "Buy Milk", done: false },
        { action: "Dentist at 5pm", done: false },
        { action: "Go to Gym", done: false },
      ],

      newToDo: "",
    };
  }

  // Create a new todo task, activated by button click
  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false}
      ]
    })
  }


  // Capture user input from text field
  updateValue = (event) => {
    this.setState({ newToDo: event.target.value });
  };

  // Toggle Checkbox
  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item)=>
        item.action === todo.action ? { ... item, done: !item.done } : item
      ),
    })
  }

  // Map out array 
  todoRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          />
        </td>
      </tr>
    ));


  


  render = () => (
    <div className="container">
      <div className="row">Artem's To Do List
      <div className="col-12">
        <input
          className="form-control"
          value={this.state.newToDo}
          onChange={this.updateValue}
        />
        <button 
        className="btn btn-primary"
        onClick={this.newToDo}
        >
          Add Item
        </button>
      </div>
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Complete</th>
            </tr>
          </thead>
          <tbody>{this.todoRows()}</tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
