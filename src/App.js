import { useEffect, useState } from "react";
import Status from "./Status";
import Panel from "./Panel";
import EditPopupTask from "./EditPopupTask";
import AddPopupTask from "./AddPopupTask";
import "./App.css"

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [currentId, setCurrentId] = useState(() => {
    const storedCurrentId = localStorage.getItem('currentId');
    return storedCurrentId ? parseInt(storedCurrentId) : 1;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem('currentId', currentId.toString());
  }, [currentId]);


  
  const [todoTasks, setTodoTasks] = useState([]);
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);
  const [addTaskStatus, setAddTaskStatus] = useState(null);
  

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id===id ? {...task, status: newStatus} : task
    ));
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask: task 
    ));
    setEditingTask(null);
  }

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setCurrentId(currentId+1);
    handleQuitAdding();
  }
  
  const handleDelete = (task_id) => {
    setEditingTask(null);
    setTasks(tasks.filter(task => task.id !== task_id))
  }



  const handleEdit = (task) => {
    setEditingTask(task);
    setTasks(tasks.map(map_task =>
      map_task.id===task.id ? {...map_task, isBeingEdited: true} : map_task
    ));
  }
  const handleQuitEditing = () => {
    setTasks(tasks.map(map_task =>
      map_task.id===editingTask.id ? {...map_task, isBeingEdited: false} : map_task
    ));
    setEditingTask(null);
  }

  const handleQuitAdding = () => {
    setAddTaskStatus(null);
  }


  useEffect(() => {
    setTodoTasks(tasks.filter((task) => task.status === Status.ToDo));
    setInProgressTasks(tasks.filter((task) => task.status === Status.InProgress));
    setDoneTasks(tasks.filter((task) => task.status === Status.Done));
  }, [tasks]);

  return (
    <div>
      <div className="flex gap-[1%] ml-[0%]">
        <Panel key={1} onAdd={() => {setAddTaskStatus(Status.ToDo)}} changeStatus = {updateTaskStatus} tasks={todoTasks} onEdit={handleEdit} status={Status.ToDo}></Panel>
        <Panel key={2} onAdd={() => {setAddTaskStatus(Status.InProgress)}} changeStatus = {updateTaskStatus} tasks={InProgressTasks} onEdit={handleEdit} status={Status.InProgress}></Panel>
        <Panel key={3} onAdd={() => {setAddTaskStatus(Status.Done)}} changeStatus = {updateTaskStatus} tasks={doneTasks} onEdit={handleEdit} status={Status.Done}></Panel>
      </div>

      {addTaskStatus && (<AddPopupTask status ={addTaskStatus} onExit={handleQuitAdding} currentId={currentId} onAdd={addTask} />)}
      {editingTask && (<EditPopupTask current_task={editingTask} onDelete={handleDelete} onExit={handleQuitEditing} onSave = {updateTask} first_input={"penis balls"} />)}

    </div>
  );
}

export default App;
