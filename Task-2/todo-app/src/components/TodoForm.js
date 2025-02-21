import React, { useState, useRef } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
      inputRef.current?.focus();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {showError && (
        <div className="error-message">
          Task cannot be empty
        </div>
      )}
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setShowError(false);
          }}
          placeholder="Add a new task..."
          className="todo-input"
          autoFocus
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
