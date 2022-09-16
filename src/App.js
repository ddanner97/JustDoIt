import React, { useState, useEffect } from 'react';

//import components
import AddTaskButton from './components/buttons/AddTaskButton';
import TaskFrom from './components/TaskForm';

function App() {

  //Declare new state variable
  const [tasks, setTaskList] = useState([]);
  const [viewForm, setViewForm] = useState(false)

  useEffect(() => {
    console.log(tasks)
  });

  return (
    <div className="to-do-app">

      {viewForm
        ? <TaskFrom viewForm={viewForm} setViewForm={setViewForm} tasks={tasks} setTaskList={setTaskList} />
        : <AddTaskButton viewForm={viewForm} setViewForm={setViewForm} />
      }

    </div>
  );
}

export default App;
