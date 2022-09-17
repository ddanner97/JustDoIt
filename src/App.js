import React, { useState, useEffect } from 'react';

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskFrom from './components/TaskForm';
import TaskCard from './components/TaskCard';

function App() {

  //Declare new state variable
  const [tasks, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false)

  useEffect(() => {
  
  });

  //Methods
  const completeTask = (id) => {
    
  }

  return (
    <div className="to-do-app">
      <h2>Inbox</h2>

      {/* Conditionally render tasks if tasks array isn't empty */}
      {tasks.length === 0 ? <div>Enter a Task</div>  
        : 
          <div className="tasks-display-container">
            {/* Render tasks */}
            {tasks.map((task, index) => 
              <TaskCard task={task} key={index} id={index} tasks={tasks} setTaskList={setTaskList} completeTask={completeTask} />
            )}
          </div>
      }

      {/* Conditionally render AddTaskButton or TaskForm */}
      {viewForm 
        ? <TaskFrom viewForm={viewForm} setViewForm={setViewForm} tasks={tasks} setTaskList={setTaskList} />
        : <AddTaskButton viewForm={viewForm} setViewForm={setViewForm} />
      }

    </div>
  );
}

export default App;
