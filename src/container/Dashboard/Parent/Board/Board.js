import React from "react";
import { v1 } from "uuid";

import "./Board.scss";

const Board = () => {
  const BoardItem = [
    {
      name: "Libros",
      url: "https://librosdetexto.sep.gob.mx/",
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
          <div className="Board_Item" key={v1()}>
            <a href={board.url}>{board.name}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
