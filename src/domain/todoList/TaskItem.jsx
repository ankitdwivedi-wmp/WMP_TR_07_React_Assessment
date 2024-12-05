import React from 'react'; // Importing React

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    // List item for displaying each task, with dynamic background color based on completion status
    <li
      className={`flex items-center justify-between p-3 mb-2 rounded-md ${task.completed ? 'bg-gray-200' : 'bg-white'} sm:p-4 sm:mb-3`}
    >
      <div className="flex items-center w-full">
        {/* Checkbox to toggle task completion status */}
        <input
          type="checkbox"
          checked={task.completed} // Checkbox is checked if the task is completed
          onChange={() => toggleTaskCompletion(task.id)} // Call toggleTaskCompletion on change
          className="mr-3"
        />
        {/* Task text, displayed with word wrapping if necessary */}
        <span className="flex-1 text-gray-700 w-full break-all">{task.text}</span>
      </div>
      
      {/* Delete button to remove the task from the list */}
      <button
        onClick={() => deleteTask(task.id)} // Call deleteTask function on button click
        className="ml-4 text-red-500 hover:text-red-700 sm:text-base"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem; // Exporting TaskItem component for use in other parts of the application
