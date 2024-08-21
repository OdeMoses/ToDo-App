import { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Create my to-do app",
    "Prepare for work",
  ]);
  const [newTasks, setNewTasks] = useState("");

  function handleInputChange(e) {
    setNewTasks(e.target.value);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="myTodo-container">
      <h1>My To-DO List</h1>

      <div className="inputDiv">
        <input
          type="text"
          id="input-task"
          placeholder="Enter Task Here..."
          onChange={handleInputChange}
          value={newTasks}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="del-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoApp;
