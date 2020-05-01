import React from "react";

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
    <div>
      {BoardItem.map((board) => {
        return <div>{board.name}</div>;
      })}
    </div>
  );
};

export default Board;
