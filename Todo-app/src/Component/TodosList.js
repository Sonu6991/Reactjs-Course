import React, { Component } from "react";

export default class TodosList extends Component {
  todoDelHandler = (todoId) => {
    this.props.todoDelete(todoId);
  };
  compeleteTodo = (todoitem) => {
    this.props.todoComplete(todoitem);
  };
  editHandler = (todo) => {
    this.props.todoEdit(todo);
    
  };
  render() {
    return (
      <div className="">
        {this.props.todos.map((todo) => {
          return (
            <li key={todo.id} className="list-items">
              <input
                className={todo.completed ? "list complete" : "list"}
                type="text"
                name=""
                id=""
                value={todo.title}
                onChange={(event) => event.preventDefault()}
              />
              <button
                className="btn-complete task-btn"
                onClick={() => {
                  this.compeleteTodo(todo);
                }}
              >
                <i className="fa fa-check-circle "></i>
              </button>
              <button
                className="btn-edit task-btn"
                onClick={() => {
                  this.editHandler(todo);
                }}
              >
                <i className="fa fa-edit "></i>
              </button>
              <button
                className="btn-delete task-btn"
                onClick={() => {
                  this.todoDelHandler(todo.id);
                }}
              >
                <i className="fa fa-trash "></i>
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}
