import React from "react";
import Todo from "../models/todo";

const TodoElement: React.FC<{
  text: string;
  id: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ text, id, setTodos }) => {
  console.log("This is id:", id);

  const handleRemove = (id: string) => {
    setTodos((prevValues) => {
      return prevValues.filter((element) => element.id !== id);
    });
  };

  return <li onClick={() => handleRemove(id)}> {text} </li>;
};

export default TodoElement;
