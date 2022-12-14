import React, { useState, useEffect } from 'react';
import { readData } from './utils';
import { updateData } from './utils';
import "./styles/main.css"

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Sidebar from './layout/Sidebar';
import Header from './components/Header';

function App() {

  //Declare new state variable
  const [taskList, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [viewSidebar, setViewSideBar] = useState(false);
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
  }, []);

  useEffect(() => {
    if (update) {
      updateData(taskList).then(() => setUpdateData(false))
    }
  }, [update])

  return (
    <div className="to-do-app min-h-screen flex flex-col">
      <Header viewSidebar={viewSidebar} setViewSideBar={setViewSideBar} viewForm={viewForm} setViewForm={setViewForm}/>

      <div className="main-container grow flex">
        {/* Conditionally render sidebar */}
        {viewSidebar &&
          <Sidebar/>
        }

        <div className="task-container grow my-4">
          {/* Conditionally render tasks if tasks array isn't empty */}
          {taskList.length === 1 ? <div> Add Task</div>  
            : 
              <div className="tasks-display-container sm:max-w-2xl md:max-w-3xl md:text-xl my-2 mx-auto">
                {/* This will be a conditionally rendered header eventually */}
                <div className="flex mx-10">
                  <h1 className="font-semibold grow">Inbox</h1>

                  <div>
                    <button className="mx-2">
                      <i class="fa-regular fa-message text-gray-400"></i>
                    </button>

                    <button className="mx-2">
                      <i class="fa-solid fa-sliders text-gray-400"></i>
                    </button>
                    
                    <button className="mx-2">
                      <i class="fa-solid fa-ellipsis text-gray-400"></i>
                    </button>
                  </div>
                </div>

                <div className="grid row-auto my-2">
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
              </div>
          }
        </div>
      </div>

      {/* Conditionally render AddTaskButton or TaskForm */}
      {viewForm && <TaskForm viewForm={viewForm} setViewForm={setViewForm} taskList={taskList} setTaskList={setTaskList} /> 
        // : <AddTaskButton viewForm={viewForm} setViewForm={setViewForm} />
      }

    </div>
  );
}

export default App;
