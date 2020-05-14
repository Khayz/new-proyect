import React from "react";
import { v1 } from "uuid";

import "./Board.scss";

const Board = () => {
  const BoardItem = [
    {
      name: "Libros",
      url: "",
    },
    {
      name: "Avisos",
      url: "",
    },
  ];

  return (
    <div className="Board">
      {BoardItem.map((board) => {
        return (
          <div className="boardItem" key={v1()}>
            <a href="/">{board.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
