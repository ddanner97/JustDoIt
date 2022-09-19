import React, { useState, useEffect } from 'react';

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskFrom from './components/TaskForm';
import TaskCard from './components/TaskCard';

function App() {

  //Declare new state variable
  const [taskList, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false)
  //We will get rid of apiKey
  const [apiKey] = useState("$2b$10$YtglDrWiRzphuz5Z9vlh.uA/Ak0ZnHcvSIAUZr0y5B5SK.E/KPFbe")

  useEffect(() => {
  
  });

  //Methods
  const completeTask = (id) => {

  }

  return (
    <div className="to-do-app">
      <h2>Inbox</h2>

      {/* Conditionally render tasks if tasks array isn't empty */}
      {taskList.length === 0 ? <div>Enter a Task</div>  
        : 
          <div className="tasks-display-container">
            {/* Render tasks */}
            {taskList.map((task, index) => 
              <TaskCard task={task} key={index} id={index} taskList={taskList} setTaskList={setTaskList} completeTask={completeTask} />
            )}
          </div>
      }

      {/* Conditionally render AddTaskButton or TaskForm */}
      {viewForm 
        ? <TaskFrom apiKey={apiKey} viewForm={viewForm} setViewForm={setViewForm} taskList={taskList} setTaskList={setTaskList} />
        : <AddTaskButton viewForm={viewForm} setViewForm={setViewForm} />
      }

    </div>
  );
}

export default App;
