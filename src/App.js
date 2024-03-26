import "./App.css";
import TodoTable from "./components/TodoTable";
import React, { useState } from "react";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const addTodo = (description, assigned) => {
    let rowNumber;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber, // Use the calculated rowNumber here
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    console.log(todos);
  };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User three" },
    {
      rowNumber: 4,
      rowDescription: "Charge Phone Battery",
      rowAssigned: "User four",
    },
  ]);

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your todo's
          <div className="card-body">
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
            <button className="btn btn-primary">add new todo</button>
            <NewTodoForm addTodo={addTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
