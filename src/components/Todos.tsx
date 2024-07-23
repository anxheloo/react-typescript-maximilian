import React from "react";
import TodoElement from "./TodoElement";

import Todo from "../models/todo";
// type Todo = {
//       id: string;
//   text: string;
// }

const Todos: React.FC<{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoElement
          key={item.text}
          text={item.text}
          id={item.id}
          setTodos={setTodos}
        ></TodoElement>
      ))}
    </ul>
  );
};

export default Todos;
