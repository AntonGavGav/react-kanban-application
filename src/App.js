import { useEffect, useState } from "react";
import Card from "./Card";
import Status from "./Status";
import Panel from "./Panel";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Some name",
      desciption: "Some goofy description, nevermind",
      status: Status.Done,
    },
    {
      id: 2,
      name: "Another name",
      desciption: "Another useless description, just to make up some space",
      status: Status.InProgress,
    },
    {
      id: 3,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.ToDo,
    },
    {
      id: 4,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.ToDo,
    },
    {
      id: 5,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 6,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 7,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 8,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 9,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 10,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 11,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 12,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 13,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
    {
      id: 14,
      name: "Arseni",
      desciption: "is a really good homie",
      status: Status.Done,
    },
  ]);



  const [todoTasks, setTodoTasks] = useState([]);
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);


  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id===id ? {...task, status: newStatus} : task
    ));
  }

  useEffect(() => {
    setTodoTasks(tasks.filter((task) => task.status === Status.ToDo));
    setInProgressTasks(tasks.filter((task) => task.status === Status.InProgress));
    setDoneTasks(tasks.filter((task) => task.status === Status.Done));
  }, [tasks]);

  return (
    <div>
      <div className="flex gap-[1%] ml-[0%]">
        <Panel key={1} tasks={todoTasks} heading={"TODO:"}></Panel>
        <Panel key={2} tasks={InProgressTasks} heading={"IN PROGRESS:"}></Panel>
        <Panel key={3} tasks={doneTasks} heading={"DONE:"}></Panel>
      </div>
    </div>
  );
}

export default App;
