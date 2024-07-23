import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <NewTodo setTodos={setTodos}></NewTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </div>
  );
}

export default App;
