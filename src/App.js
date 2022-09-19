import React, { useState, useEffect } from 'react';
import { readData } from './utils';
import { updateData } from './utils';

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';

function App() {

  //Declare new state variable
  const [taskList, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false);

  //Methods
  const completeTask = (id) => {

    if(taskList.length === 1){

      setTaskList([{}])
      updateData(taskList)

    } else {

      //create new array and slice element out
      let arr = taskList
      arr.splice(id, 1)

      //pass new array to updateData PUT call
      updateData(arr).then((res) => console.log(res))

    }
  }

  useEffect(() => {
    if (!viewForm){
      readData().then((res) => {
        setTaskList(res.record)
      })
    }
  }, [viewForm]);

  return (
    <div className="to-do-app">
      <h2>Inbox</h2>

      {/* Conditionally render tasks if tasks array isn't empty */}
      {taskList.length === 0 ? <div>Enter a Task</div>  
        : 
          <div className="tasks-display-container">
            {/* Render tasks */}
            {taskList.map((task, index) => 
              <TaskCard readData={readData} task={task} key={index} id={index} taskList={taskList} setTaskList={setTaskList} completeTask={completeTask} />
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
