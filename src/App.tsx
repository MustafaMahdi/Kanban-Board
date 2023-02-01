import "./App.css";
import Column from "./components/Column";
import { PriorityTypes, StatusTypes } from "./defines/defines";
import { ITASK } from "./models/ITask";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const tasks: ITASK[] = [
  {
    title: "task1",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Highest,
    status: StatusTypes.Done,
    id: "1",
  },
  {
    title: "task2",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Highest,
    status: StatusTypes.Done,
    id: "2",
  },
  {
    title: "task3",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.High,
    status: StatusTypes.InReview,
    id: "3",
  },
  {
    title: "task4",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.High,
    status: StatusTypes.InReview,
    id: "4",
  },
  {
    title: "task5",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Low,
    status: StatusTypes.InReview,
    id: "5",
  },
  {
    title: "asdasd",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Low,
    status: StatusTypes.Todo,
    id: "6",
  },
  {
    title: "msmsms",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Medium,
    status: StatusTypes.Todo,
    id: "7",
  },
  {
    title: "masdsadm",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Medium,
    status: StatusTypes.Todo,
    id: "8",
  },
  {
    title: "mmmmmmmm",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Medium,
    status: StatusTypes.Todo,
    id: "9",
  },
  {
    title: "hisss",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Highest,
    status: StatusTypes.InProgress,
    id: "10",
  },
  {
    title: "task1",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.None,
    status: StatusTypes.InProgress,
    id: "11",
  },
  {
    title: "asdasdasd",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.None,
    status: StatusTypes.InProgress,
    id: "12",
  },
  {
    title: "task1",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.High,
    status: StatusTypes.InProgress,
    id: "13",
  },
  {
    title: "task1",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.Low,
    status: StatusTypes.InProgress,
    id: "14",
  },
  {
    title: "task1",
    description:
      "hi pleasedoit for me ya man ya brns agamed yammm no sdf sdfsdf sf sdfsf",
    priority: PriorityTypes.High,
    status: StatusTypes.InProgress,
    id: "15",
  },
];
function App() {
  const todoTasks: ITASK[] = [];
  const inProgressTasks: ITASK[] = [];
  const inReviewTasks: ITASK[] = [];
  const doneTasks: ITASK[] = [];

  // filtering books on its shelf
  tasks.forEach((task) => {
    switch (task.status) {
      case StatusTypes.Todo:
        todoTasks.push(task);
        break;
      case StatusTypes.InProgress:
        inProgressTasks.push(task);
        break;
      case StatusTypes.InReview:
        inReviewTasks.push(task);
        break;
      case StatusTypes.Done:
        doneTasks.push(task);
        break;
    }
  });
  return (
    <main className="content">
      <div className="container p-0">
        <h1 className="h3 mb-3">Kanban Board</h1>
        <DndProvider backend={HTML5Backend}>

        <div className="row px-1">
          <Column tasks={todoTasks} />
          <Column tasks={inProgressTasks}/>
          <Column tasks={inReviewTasks}/>
          <Column tasks={doneTasks}/>
        </div>
        </DndProvider>
      </div>
    </main>
  );
}

export default App;
