import React, { useState } from "react"; // Importing React and useState hook
import CommonButton from "../../components/buttons"; // Importing the CommonButton component

const TaskInput = ({ addTask }) => {
  // State to manage the task input field value
  const [task, setTask] = useState("");
  
  // State to manage error messages for invalid task inputs
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the addition of a new task
  const handleAddTask = () => {
    if (task.trim()) { // Check if the task is not empty
      addTask(task); // Call the addTask function passed as a prop to add the task
      setTask(""); // Reset the input field after adding the task
      setErrorMessage(""); // Clear any existing error messages
    } else {
      setErrorMessage("Task cannot be empty! Please enter the task"); // Set an error message if input is empty
    }
  };

  return (
    <>
      {/* Input field for entering a new task */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Add a new task" // Placeholder text for the input field
          value={task} // Binding the input field value to the task state
          onChange={(e) => setTask(e.target.value)} // Updating the task state on user input
          className="w-full h-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
          required // Marking the input as required (though validation happens in the handleAddTask)
        />
        
        {/* CommonButton component to trigger task addition */}
        <CommonButton
          text="Add"
          onClick={handleAddTask} // Call handleAddTask on button click
          bgColor="bg-blue-500"
          hoverColor="bg-blue-600"
          textColor="text-white"
        />
      </div>

      {/* Conditional rendering of error message if task is empty */}
      {errorMessage && (
        <p className="text-center text-red-500 text-xl mt-2">{errorMessage}</p>
      )}
    </>
  );
};

export default TaskInput; // Exporting TaskInput component for use in other parts of the application
