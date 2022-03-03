import { useState, useContext } from "react";
import TaskContext from "../../Context/TaskContext";

function Form() {
  const { title, setTitle, handleSubmit } = useContext(TaskContext);

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-semibold tracking-wide font-poppins">
          Add Your Tasks
        </h1>
      </div>
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-80"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn mx-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
