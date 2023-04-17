import React from 'react';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'todo1', status: 'active' },
    { id: 2, text: 'todo2', status: 'active' },
  ]);
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
