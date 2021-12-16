import "./App.css";
import { Component } from "react";
import Form from "./Component/Form";
import Header from "./Component/Header";
import TodosList from "./Component/TodosList";

class App extends Component {
  constructor(props) {
    super(props);
    this.editedTodo = {};
    this.state = {
      input: "",
      todos: [],
      lable: "",
    };
  }

  inputChange = (inputValue) => {
    this.setState({
      input: inputValue,
    });
  };
  submitHandler = () => {
    let renderTodos = [];
    console.log(this.editedTodo);
    if (Object.keys(this.editedTodo).length == 0) {
      renderTodos = [
        ...this.state.todos,
        { id: Math.random(), title: this.state.input, completed: false },
      ];
    } else {
      renderTodos = this.state.todos.map((item) => {
        if (item.id === this.editedTodo.id) {
          return {
            ...item,
            title: this.state.input,
            completed: this.editedTodo.completed,
          };
        }
        return item;
      });
      this.editedTodo = {};
      this.setState({
        input: "",
        lable: "",
      });
    }
    console.log(renderTodos);
    this.setState(
      {
        input: "",
        todos: renderTodos,
      },
      () => {
        console.log(this.state.todos);
      }
    );
  };

  todoDeletehandler = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== todoId;
      }),
    });
  };

  todoCompleted = (todo) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    });
  };

  editFunc = (todo) => {
    this.editedTodo = this.state.todos.find((item) => item.id === todo.id);
    console.log(this.editedTodo);
    this.setState({
      input: this.editedTodo.title,
      lable: "OK",
    });
  };

  render() {
    // console.log("editedTodo", this.editedTodo);
    return (
      <div className="container">
        <div className="todo-container">
          <Header />
          <Form
            input={this.state.input}
            inpuChnagefunc={this.inputChange}
            onFormSubmit={this.submitHandler}
            lable={this.state.lable ? this.state.lable : "Add"}
          />
          <TodosList
            todos={this.state.todos}
            todoDelete={this.todoDeletehandler}
            todoComplete={this.todoCompleted}
            todoEdit={this.editFunc}
          />
        </div>
      </div>
    );
  }
}

export default App;
