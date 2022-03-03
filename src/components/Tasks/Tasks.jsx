import React, { useContext } from "react";
import Task from "./Task";
import TaskContext from "../../Context/TaskContext";

function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task?.id}>
            <Task key={task?.id} id={task?.id} title={task?.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
