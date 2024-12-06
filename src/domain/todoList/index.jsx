import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import CommonButton from '../../components/buttons';
import Card from '../../components/card';

const TodoList = () => {
  // State to manage the tasks; initializes with tasks from localStorage or an empty array
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : []; // If tasks exist in localStorage, use them
  });

  // State to manage the filter (All, Completed, or Pending tasks)
  const [filter, setFilter] = useState('All');

  // useEffect to update localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to localStorage
  }, [tasks]); // Runs whenever the tasks state changes

  // Function to add a new task; each task has a unique ID based on the current timestamp
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Function to toggle the completion state of a task
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ) // Toggle completion status of the task
    );
  };

  // Function to delete a task by its id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove task from tasks array
  };

  // Filtering tasks based on the selected filter (All, Completed, or Pending)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed; // Show only completed tasks
    if (filter === 'Pending') return !task.completed; // Show only pending tasks
    return true; // Show all tasks if filter is 'All'
  });

  return (
    <Card> {/* Card component used to wrap the content */}
      <h1 className="text-5xl font-semibold text-center text-gray-800 mb-6">To-Do List</h1>
      {/* TaskInput component for adding tasks */}
      <TaskInput addTask={addTask} />
      
      {/* Filter buttons for switching between All, Completed, and Pending tasks */}
      <div className="flex justify-center space-x-4 mt-4 mb-6">
        <CommonButton
          text="All"
          onClick={() => setFilter('All')} // Set filter to 'All'
          bgColor="bg-blue-500"
          hoverColor="bg-blue-600"
          textColor="text-white"
          isActive={filter === 'All'} // Highlight active filter button
        />
        <CommonButton
          text="Completed"
          onClick={() => setFilter('Completed')} // Set filter to 'Completed'
          bgColor="bg-green-500"
          hoverColor="bg-green-600"
          textColor="text-white"
          isActive={filter === 'Completed'} // Highlight active filter button
        />
        <CommonButton
          text="Pending"
          onClick={() => setFilter('Pending')} // Set filter to 'Pending'
          bgColor="bg-yellow-500"
          hoverColor="bg-yellow-600"
          textColor="text-white"
          isActive={filter === 'Pending'} // Highlight active filter button
        />
      </div>
      
      {/* TaskList component displays tasks based on the current filter */}
      <TaskList

        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion} // Function to toggle completion of tasks
        deleteTask={deleteTask} // Function to delete a task
      />
    </Card>
  );
};

export default TodoList; // Exporting TodoList component for use in other parts of the application
