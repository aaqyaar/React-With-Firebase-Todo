import React from "react";
import Home from "./pages/Home";
import { TaskProvider } from "./Context/TaskContext";
function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
