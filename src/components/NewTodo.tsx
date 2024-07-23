import React, { useRef } from "react";
import Todo from "../models/todo";

const NewTodo: React.FC<{
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredText = inputRef.current?.value;

    if (!enteredText || enteredText?.trim().length === 0) {
      console.log("Pls fill in the field!");
      return;
    }

    setTodos((prevValues: Todo[]) => {
      return [
        ...prevValues,
        new Todo(enteredText),
        // { id: new Date().toISOString(), text: enteredText },
      ];

      // return prevValues.concat(new Todo(enteredText));
    });

    inputRef.current.value = "";

    console.log("This is ref value:", enteredText);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="text">Todo Text</label>
      <input ref={inputRef} id="text" type="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
