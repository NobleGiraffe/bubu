import React, { useState } from 'react';

const Task = ({ task }) => {
  const [isCompleted, setCompleted] = useState(false);

  const toggleCompleted = () => setCompleted(!isCompleted);

  return (
    <div className={`task ${isCompleted ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={isCompleted} 
        onChange={toggleCompleted} 
      />
      <span>{task}</span>
    </div>
  );
};

export default Task;
