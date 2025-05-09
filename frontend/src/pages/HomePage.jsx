import React from "react";
import ThreadList from "../components/ThreadList";

const HomePage = () => {
  return (
    <div className="container">
      <nav>
        <a href="/">Start</a> | <a href="/new-thread">Ny tråd</a>
      </nav>
      <h1>Threads</h1>
      <ThreadList />
    </div>
  );
};

export default HomePage;
