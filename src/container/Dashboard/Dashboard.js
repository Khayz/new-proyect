import React from "react";
import Board from "./Parent/Board/Board";
import Childs from "./Parent/Childs/Childs";
import BlackBoard from "./Parent/BlackBoard/BlackBoard";

import "./Dashboard.scss";
import Teacher from "./Teacher/Teacher";

const Dashboard = ({ user }) => {
  return user.account === "parent" ? (
    <div className="Dashboard">
      <div className="side">
        <Childs />
        <Board />
      </div>
      <BlackBoard />
    </div>
  ) : (
    <Teacher />
  );
};

export default Dashboard;
