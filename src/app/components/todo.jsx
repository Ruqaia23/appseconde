"use client";

import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodo(result);
      } catch (error) {
        console.error("Error fetching the todo:", error);
      }
    };

    fetchTodo();
  }, []);

  return (
    <div>
      <h1>{todo.title || "Loading..."}</h1>
    </div>
  );
}
