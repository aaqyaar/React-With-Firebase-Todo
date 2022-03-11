import { useState, useEffect, createContext } from "react";
import { db } from "../Firebase";
import {
  getDocs,
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskContext = createContext();

// ! Context Stuff
export const TaskProvider = ({ children }) => {
  // * tasks
  const [tasks, setTasks] = useState([]);

  // * retrieve tasks from firestore
  const taskRef = collection(db, "tasks");

  const getTasks = async () => {
    try {
      const q = query(taskRef, orderBy("createdAt"));

      onSnapshot(q, (taskSnap) => {
        const task = taskSnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTasks(task);
      });
    } catch (err) {
      toast.error("Oops! Something went wrong.");
    }
  };
  useEffect(() => {
    getTasks();
  }, []);

  // ! adding task

  const [title, setTitle] = useState("");
  // ? function that adds the task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      await addDoc(taskRef, { title: title, createdAt: serverTimestamp() });
      setTitle("");
      toast.success("Successfully added task to the firestore.");
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, title, setTitle, handleSubmit }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
