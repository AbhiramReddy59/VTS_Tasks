import React from 'react';
import { motion } from 'framer-motion';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.div
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="Delete task"
      >
        ×
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;
