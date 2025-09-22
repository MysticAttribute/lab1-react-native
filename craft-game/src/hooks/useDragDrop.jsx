import { useState } from "react";

export const useDragDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item, fromZone, fromIndex) => (event) => {

    const data = { item, fromZone, fromIndex };
    event.dataTransfer.setData("application/json", JSON.stringify(data));
    setDraggedItem(data);
  };


  const handleDrop = (onDropCallback, toZone, toIndex = null) => (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("application/json");
    if (!data) return;

    const { item, fromZone, fromIndex } = JSON.parse(data);

    if (onDropCallback) {

      onDropCallback(item, fromZone, fromIndex, toZone, toIndex);
    }

    setDraggedItem(null);
  };


  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return {
    draggedItem,
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};
