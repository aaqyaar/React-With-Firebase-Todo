import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
function Home() {
  return (
    <section>
      <Navbar />
      <Main />
      <ToastContainer />
    </section>
  );
}

export default Home;
