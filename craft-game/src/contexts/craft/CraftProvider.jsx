import { useState, useEffect } from "react";
import CraftContext from "./CraftContext";
import { swap } from "@utils/swap";

const CraftProvider = ({ children }) => {

  const [craftCells, setCraftCells] = useState(() => {
    const saved = localStorage.getItem("craft");
    return saved ? JSON.parse(saved) : Array(9).fill(null);
  });


  useEffect(() => {
    localStorage.setItem("craft", JSON.stringify(craftCells));
  }, [craftCells]);


  const addItem = (item, index = null) => {
    const targetIndex = index !== null ? index : craftCells.findIndex(i => i === null);
    if (targetIndex === -1) return false;

    setCraftCells(prev => {
      const updated = [...prev];
      updated[targetIndex] = item;
      return updated;
    });

    return true;
  };


  const moveItemTo = (fromIndex, toIndex, itemFromOutside = null) => {
    if (fromIndex === toIndex) return null;

    let evictedItem = null;

    if (itemFromOutside) {

      const success = addItem(itemFromOutside, toIndex);
      if (!success) return itemFromOutside; 
      if (craftCells[toIndex] && craftCells[toIndex] !== itemFromOutside) {
        evictedItem = craftCells[toIndex]; 
      }
    } else {

      if (craftCells[toIndex] === null) {
        setCraftCells(prev => {
          const updated = [...prev];
          updated[toIndex] = prev[fromIndex];
          updated[fromIndex] = null;
          return updated;
        });
      } else {
        setCraftCells(prev => swap(prev, fromIndex, toIndex));
      }
    }

    return evictedItem;
  };

  const removeItem = (index) => {
    if (index < 0 || index >= craftCells.length) return;
    setCraftCells(prev => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
  };

  const clearCraft = () => setCraftCells(Array(9).fill(null));

  return (
    <CraftContext.Provider value={{ craftCells, addItem, removeItem, moveItemTo, clearCraft }}>
      {children}
    </CraftContext.Provider>
  );
};

export default CraftProvider;
