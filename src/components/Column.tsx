import React, { useEffect, useRef } from "react";
import { useDrop } from "react-dnd";
import { StatusTypes } from "../defines/defines";
import { ITASK } from "../models/ITask";
import AddNewTask from "./AddNewTask";
import Task from "./Task";

const Column: React.FC<{
  columnTasks: ITASK[];
  columnName: string;
  columnStatus: StatusTypes;
  onChangeTaskStatusHandler: (
    updatedTask: ITASK,
    newStatus: StatusTypes
  ) => void;
}> = ({ columnTasks, columnName, columnStatus, onChangeTaskStatusHandler }) => {
  const columnRef = useRef(null);
  const useDropConfig = {
    accept: "card",
    drop(updatedTask: ITASK) {
      onChangeTaskStatusHandler(updatedTask, columnStatus);
    },
  };
  const [, setDrop] = useDrop(useDropConfig);

  const orderedTasksByPriority = () => {
    columnTasks.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };

  useEffect(() => {
    orderedTasksByPriority();
    setDrop(columnRef);
  }, [columnTasks, columnRef]);

  const displayTasks = columnTasks.map((task) => {
    return <Task task={task} key={task.id} />;
  });

  return (
    <div className="col-12 col-lg-6 col-xl-3" ref={columnRef}>
      <div className="card card-border-primary">
        <div className="card-header">
          <div className="card-actions float-right">
            {/* <div className="dropdown show">
              <a href="#" data-toggle="dropdown" data-display="static">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-horizontal align-middle"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div> */}
          </div>
          <h5 className="card-title">{columnName}</h5>
          {/* <h6 className="card-subtitle text-muted">
            Nam pretium turpis et arcu. Duis arcu tortor.
          </h6> */}
        </div>
        <div className="card-body p-3">
          {displayTasks}
          <AddNewTask />
        </div>
      </div>
    </div>
  );
};

export default Column;
