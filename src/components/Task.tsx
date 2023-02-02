import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { ITASK } from "../models/ITask";
import Details from "../pages/Details";


const Task: React.FC<{ task: ITASK }> = ({ task }) => {
  const taskRef = useRef(null);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "card",
      item: task ,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  const opacity = isDragging ? 0.5 : 1;

  drag(taskRef);
  return (
    <div className="card mb-3 bg-light" ref={taskRef} style={{ opacity }}>
      <div className="card-body p-3">
        <div className="float-right mt-n1 d-flex align-items-center justify-content-center card-title">
          <p className="h4 ">{task.title}</p>
        </div>
        <p>{task.description}</p>
        <div className="float-right mr-n2 text-muted">
          <p>
            Priority : <strong>{task.priority}</strong>
          </p>
        </div>
        {/* should be route */}
        <Details />
      </div>
    </div>
  );
};

export default Task;
