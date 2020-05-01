import React from "react";
import Board from "./Board/Board";
import Childs from "./Childs/Childs";
import BlackBoard from "./BlackBoard/BlackBoard";

const Dashboard = () => {
  return (
    <div>
      <Childs />
      <Board />
      <BlackBoard />
    </div>
  );
};

export default Dashboard;
