import React, { useState, useEffect } from 'react';
import { readData } from './utils';
import { updateData } from './utils';
import "./styles/main.css"

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';

function App() {

  //Declare new state variable
  const [taskList, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [update, setUpdateData] = useState(false);

  const completeTask = async (id) => {
    setTaskList(taskList.filter((task, index) => index != id+1))
    setUpdateData(true)
  }

  useEffect(() => {
    readData()
    .then((res) => {
      setTaskList(res.record)
    }) 
  }, [viewForm]);

  useEffect(() => {
    if (update) {
      updateData(taskList).then(() => setUpdateData(false))
    }
  }, [update])

  return (
    <div className="to-do-app flex flex-col">
      <div className={"bg-primary w-full text-white overflow-hidden flex flex-row"}>
        <i className="py-2.5 indent-8 fa-solid fa-inbox text-3xl"></i>
        <h2 className="py-2.5 indent-4 text-3xl">Inbox</h2>
      </div>

      {/* Conditionally render tasks if tasks array isn't empty */}
      {taskList.length === 1 ? <div className="grow">Enter a Task</div>  
        : 
          <div className="tasks-display-container grow grid row-auto items-center">
            {/* Render tasks */}
            {taskList.slice(1).map((task, index) => 
              <TaskCard 
                readData={readData} 
                task={task} 
                key={index} 
                id={index} 
                taskList={taskList} 
                setTaskList={setTaskList} 
                completeTask={completeTask} 
              />
            )}
          </div>
      }

      {/* Conditionally render AddTaskButton or TaskForm */}
      {viewForm 
        ? <TaskForm viewForm={viewForm} setViewForm={setViewForm} taskList={taskList} setTaskList={setTaskList} />
        : <AddTaskButton viewForm={viewForm} setViewForm={setViewForm} />
      }

    </div>
  );
}

export default App;
