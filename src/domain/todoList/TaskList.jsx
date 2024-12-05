import TaskItem from "./TaskItem";

/**
 * TaskList component renders a list of tasks.
 * It takes in a list of tasks and renders each task using the TaskItem component.
 * It also provides filtering functionality to show a message when there are no tasks.
 * 
 * @param {Array} tasks - An array of task objects to display in the list.
 * @param {function} toggleTaskCompletion - A function to toggle the completion status of a task.
 * @param {function} deleteTask - A function to delete a task from the list.
 * 
 * @returns {JSX.Element} A list of tasks or a message indicating no tasks are available.
 */
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      {
        /** 
         * Conditional rendering based on whether there are tasks.
         * If the tasks array is empty, a message is displayed indicating no tasks.
         */
        tasks.length === 0 ? (
          /** Message displayed when there are no tasks */
          <p className="text-center text-xl text-gray-500">No tasks!!!</p>
        ) : (
          /** 
           * If there are tasks, the component maps over them and renders a TaskItem 
           * for each task, passing down necessary props.
           */
          <ul className="space-y-2">
            {
              tasks.map((task) => (
                /** 
                 * Rendering a TaskItem for each task.
                 * Each TaskItem is passed the task object, toggleTaskCompletion, 
                 * and deleteTask functions as props.
                 */
                <TaskItem
                  key={task.id} // Use task ID as the key for each item in the list
                  task={task} // Passing the current task object as a prop to TaskItem
                  toggleTaskCompletion={toggleTaskCompletion} // Passing toggleTaskCompletion function to TaskItem
                  deleteTask={deleteTask} // Passing deleteTask function to TaskItem
                />
              ))
            }
          </ul>
        )
      }
    </div>
  );
};

export default TaskList; // Exporting TaskList component for use in other parts of the application
