import { useEffect, useState } from "react";
import Status from "./Status";
import Panel from "./Panel";
import EditPopupTask from "./EditPopupTask";
import AddPopupTask from "./AddPopupTask";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Some name",
      description: "Some goofy description, nevermind",
      status: Status.Done,
      date: null,
    },
    {
      id: 2,
      name: "Another name",
      description: "Another useless description, just to make up some space",
      status: Status.InProgress,
      date: null,
    },
    {
      id: 3,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.ToDo,
      date: null,
    },
    {
      id: 4,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.ToDo,
      date: null,
    },
    {
      id: 5,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 6,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 7,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 8,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 9,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 10,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 11,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 12,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 13,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
    {
      id: 14,
      name: "Arseni",
      description: "is a really good homie",
      status: Status.Done,
      date: null,
    },
  ]);



  const [todoTasks, setTodoTasks] = useState([]);
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

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



  const handleEdit = (task) => {
    setEditingTask(task);
  }

  const handleQuitEditing = () => {
    setEditingTask(null);
  }

  useEffect(() => {
    setTodoTasks(tasks.filter((task) => task.status === Status.ToDo));
    setInProgressTasks(tasks.filter((task) => task.status === Status.InProgress));
    setDoneTasks(tasks.filter((task) => task.status === Status.Done));
  }, [tasks]);

  return (
    <div>
      <div className="flex gap-[1%] ml-[0%]">
        <Panel key={1} tasks={todoTasks} onEdit={handleEdit} status={Status.ToDo}></Panel>
        <Panel key={2} tasks={InProgressTasks} onEdit={handleEdit} status={Status.InProgress}></Panel>
        <Panel key={3} tasks={doneTasks} onEdit={handleEdit} status={Status.Done}></Panel>
      </div>

      <AddPopupTask />
      {/* {editingTask && (<EditPopupTask current_task={editingTask} onExit={handleQuitEditing} onSave = {updateTask} first_input={"penis balls"} />)}
       */}

    </div>
  );
}

export default App;
