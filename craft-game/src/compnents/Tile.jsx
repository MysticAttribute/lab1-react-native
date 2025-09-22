import { useState } from "react";

const Tile = ({ item, size = 96, onClick, onDragStart, onDrop, onDragOver }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      style={{ width: size, height: size }}
      className={`
        flex flex-shrink-0 bg-gray-200 p-2 rounded 
        transform transition duration-200 cursor-pointer
        hover:bg-gray-100 hover:scale-105
        ${isDragOver ? "ring-2 ring-yellow-400 scale-105 bg-gray-100" : ""}
      `}
      onClick={onClick}
      draggable={!!onDragStart}
      onDragStart={onDragStart}
      onDrop={(e) => {
        if (onDrop) onDrop(e);
        setIsDragOver(false); // reset la drop
      }}
      onDragOver={(e) => {
        if (onDragOver) onDragOver(e);
        setIsDragOver(true);
      }}
      onDragEnter={() => setIsDragOver(true)}
      onDragLeave={() => setIsDragOver(false)}
    >
      {item && <img src={item.icon} alt={item.name} />}
    </div>
  );
};

export default Tile;
