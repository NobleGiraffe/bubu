import React, { useState, useEffect } from 'react';

const Day = ({ day, week, startDate, tasksForTheDay }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [tasks, setTasks] = useState([]); // Tasks with completion status
  const [showMotivation, setShowMotivation] = useState(false); // For motivational message

  const currentDay = new Date(startDate);
  currentDay.setDate(startDate.getDate() + (week - 1) * 7 + (day - 1));
  const formattedDate = currentDay.toDateString();
  const tasksStorageKey = `tasks-${formattedDate}`;

  // Load tasks from localStorage or set up the tasks for the day
  useEffect(() => {
    const savedTasks = localStorage.getItem(tasksStorageKey);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      // Initialize tasks with completion state
      const initialTasks = tasksForTheDay.map(task => ({ task, completed: false }));
      setTasks(initialTasks);
    }
  }, [tasksStorageKey, tasksForTheDay]);

  // Save tasks completion status to localStorage whenever it changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem(tasksStorageKey, JSON.stringify(tasks));
    }
  }, [tasks, tasksStorageKey]);

  // Handle task completion toggle
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((taskObj, i) =>
      i === index ? { ...taskObj, completed: !taskObj.completed } : taskObj
    );
    setTasks(updatedTasks);

    // Check if all tasks are completed and show the motivational message
    if (updatedTasks.every(taskObj => taskObj.completed)) {
      setShowMotivation(true);
    }
  };

  // Toggle the expansion of tasks
  const toggleExpanded = () => {
    setExpanded(!isExpanded);
    setShowMotivation(false); // Reset motivational message on collapse
  };

  return (
    <div
      className={`day-tile p-4 rounded-md shadow-sm text-center cursor-pointer transition duration-300 ${
        tasks.every(task => task.completed) ? 'bg-pastel-pink text-white line-through' : 'bg-pink-100 hover:bg-pink-200'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <h3 className="font-bold">{`Day ${day}`}</h3>
          <p>{formattedDate}</p>
        </div>

        {/* Expand/Collapse Button */}
        <div onClick={toggleExpanded} className="expand-btn text-2xl font-bold cursor-pointer">
          {isExpanded ? '-' : '+'}
        </div>
      </div>

      {/* Expanded tasks list */}
      {isExpanded && (
        <div className="tasks-list mt-4 text-left bg-white p-4 rounded-md shadow-inner">
          <h4 className="font-semibold">Tasks for the day:</h4>
          <ul className="list-disc list-inside mb-4">
            {tasks.map((taskObj, i) => (
              <li key={i}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={taskObj.completed}
                    onChange={() => toggleTaskCompletion(i)}
                  />
                  {taskObj.task}
                </label>
              </li>
            ))}
          </ul>

          {/* Motivational message */}
          {showMotivation && (
            <div className="motivational-message bg-green-100 text-green-800 p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Great job! 🎉</h4>
              <p>You're doing amazing. Keep up the good work!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Day;
