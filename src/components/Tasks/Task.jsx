import { useState } from "react";
import { db } from "../../Firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { FaReply } from "react-icons/fa";
import { toast } from "react-toastify";

function Task({ title, id }) {
  const [isCompleted, setIsCompleted] = useState(false);

  // ! completed function
  const handleCompleted = () => {
    setIsCompleted(true);
  };
  // ! undo
  const handleUndo = () => {
    setIsCompleted(false);
  };
  // ! delete function
  const handleDeleted = async () => {
    await deleteDoc(doc(db, "tasks", id));
    toast("You Deleted the task😭.");
  };

  return (
    <div className="flex justify-center mt-4 my-2">
      <div className="grid grid-cols-2 my-4 ml-12 lg:ml-0">
        <div
          id="taskTitle"
          className="flex justify-center items-center  lg:absolute lg:left-[27rem]"
        >
          <h4
            className={`${
              isCompleted && "line-through"
            } text-xl font-poppins tracking-wider`}
          >
            {title}
          </h4>
        </div>
        <div
          id="icons"
          className="flex items-center justify-center gap-1 lg:absolute lg:right-[27rem]"
        >
          {isCompleted ? (
            <FaReply onClick={handleUndo} className="w-5 h-5 cursor-pointer" />
          ) : (
            <BsCheckCircleFill
              className="w-5 h-5 cursor-pointer"
              onClick={handleCompleted}
            />
          )}
          <HiOutlineTrash
            className="w-6 h-6 cursor-pointer"
            onClick={handleDeleted}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;
