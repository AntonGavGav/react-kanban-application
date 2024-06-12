import { useEffect, useState } from "react";
import Status from "./Status";
import Panel from "./Panel";
import EditPopupTask from "./EditPopupTask";
import AddPopupTask from "./AddPopupTask";

function App() {

  const [tasks, setTasks] = useState([
  
  ]);


  const [currentId, setCurrentId] = useState(1);
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
    handleQuitEditing();
  }

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setCurrentId(currentId+1);
    handleQuitAdding();
  }



  const handleEdit = (task) => {
    setEditingTask(task);
  }
  const handleQuitEditing = () => {
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
        <Panel key={1} onAdd={() => {setAddTaskStatus(Status.ToDo)}} tasks={todoTasks} onEdit={handleEdit} status={Status.ToDo}></Panel>
        <Panel key={2} onAdd={() => {setAddTaskStatus(Status.InProgress)}} tasks={InProgressTasks} onEdit={handleEdit} status={Status.InProgress}></Panel>
        <Panel key={3} onAdd={() => {setAddTaskStatus(Status.Done)}} tasks={doneTasks} onEdit={handleEdit} status={Status.Done}></Panel>
      </div>

      {addTaskStatus && (<AddPopupTask status ={addTaskStatus} onExit={handleQuitAdding} currentId={currentId} onAdd={addTask} />)}
      {editingTask && (<EditPopupTask current_task={editingTask} onExit={handleQuitEditing} onSave = {updateTask} first_input={"penis balls"} />)}

    </div>
  );
}

export default App;
