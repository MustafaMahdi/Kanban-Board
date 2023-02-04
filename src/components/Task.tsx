import React, { useEffect, useRef } from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { PriorityTypes } from "../defines/defines";
import { ITASK } from "../models/ITask";

const Task: React.FC<{ task: ITASK }> = ({ task }) => {
  const taskRef = useRef(null);

  useEffect(() => {
    setDrag(taskRef);
  }, [taskRef]);

  const [{ isDragging }, setDrag] = useDrag(
    () => ({
      type: "card",
      item: task,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  const opacity = isDragging ? 0.5 : 1;
  const displayTaskPriority =
    (task.priority === PriorityTypes.Highest && <strong>Highest</strong>) ||
    (task.priority === PriorityTypes.High && <strong>High</strong>) ||
    (task.priority === PriorityTypes.Medium && <strong>Medium</strong>) ||
    (task.priority === PriorityTypes.Low && <strong>Low</strong>) ||
    (task.priority === PriorityTypes.None && <strong>None</strong>);

  return (
    <div className="card mb-3 bg-light" ref={taskRef} style={{ opacity }}>
      <div className="card-body p-3">
        <div className="float-right mt-n1 d-flex align-items-center justify-content-center card-title">
          <p className="h4 ">{task.title}</p>
        </div>
        <p>{task.description}</p>
        <div className="float-right mr-n2 text-muted">
          <p>Priority : {displayTaskPriority}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link className="btn btn-outline-primary btn-sm" to={`/details/${task.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
