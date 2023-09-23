import React, { useState } from 'react';

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text && category) {
      const newTask = { text, category };

      onTaskFormSubmit(newTask);

      setText('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="task-input"
        />
      </label>
      <label>
        Category
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="category-input"
        />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
