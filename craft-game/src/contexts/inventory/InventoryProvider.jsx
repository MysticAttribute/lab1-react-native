import { useState, useEffect } from "react";
import InventoryContext from "@contexts/inventory/InventoryContext";
import { swap } from "@utils/swap";

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("inventory");
    return saved ? JSON.parse(saved) : Array(44).fill(null);
  });

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = (item, index = null) => {
    const targetIndex = index !== null ? index : inventory.findIndex(i => i === null);
    if (targetIndex === -1) {
      alert("Inventar plin!");
      return false;
    }

    setInventory(prev => {
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
      if (inventory[toIndex] && inventory[toIndex] !== itemFromOutside) {
        evictedItem = inventory[toIndex];
      }
    } else {

      if (inventory[toIndex] === null) {
        setInventory(prev => {
          const updated = [...prev];
          updated[toIndex] = prev[fromIndex];
          updated[fromIndex] = null;
          return updated;
        });
      } else {
        setInventory(prev => swap(prev, fromIndex, toIndex));
      }
    }

    return evictedItem;
  };


  const removeItem = (index) => {
    if (index === null) return;
    if (index < 0 || index >= inventory.length) return;
    const updated = [...inventory];
    updated[index] = null;
    setInventory(updated);
  };

  const clearInventory = () => setInventory(Array(44).fill(null));

  return (
    <InventoryContext.Provider value={{ inventory, addItem, removeItem, moveItemTo, clearInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
