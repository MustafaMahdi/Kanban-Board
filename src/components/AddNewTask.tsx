import React, { useState } from "react";
import TaskModal from "./TaskModal";
const AddNewTask: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button onClick={handleOpen} className="btn btn-primary btn-block">
        Add new
      </button>
      <TaskModal isOpen={isOpen} handleCloseModal={handleClose} />
    </div>
  );
};

export default AddNewTask;
