import useCraft from "../contexts/craft/useCraft";
import Tile from "./Tile";
import useInventory from "@contexts/inventory/useInventory";
import { useDragDrop } from "@hooks/useDragDrop";

const Inventory = () => {
  const { inventory, removeItem: removeItemFromInventory, moveItemTo } = useInventory();
  const { addItem: addItemToCraft, removeItem: removeItemFromCraft } = useCraft();
  const { handleDragStart, handleDrop, handleDragOver } = useDragDrop();

  const handleClick = (item, index) => {
    const addedSuccessfully = addItemToCraft(item);
    if (addedSuccessfully) removeItemFromInventory(index);
  };

  const handleDropOnTile = (item, fromZone, fromIndex, toZone, toIndex) => {
    if (fromZone === "craft") {
      const evictedItem = moveItemTo(null, toIndex, item);
      removeItemFromCraft(fromIndex);

      if (evictedItem) {

      addItemToCraft(evictedItem, fromIndex);
      }
    }
    if (fromZone === "inventory") {
      moveItemTo(fromIndex, toIndex);
    }
    if (fromZone === "resources") {
      moveItemTo(null, toIndex, item);
    }
  };


  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 p-2 rounded">
      <h2 className="text-xl font-bold mb-2">Inventar</h2>
      <div className="grid grid-cols-11 gap-2 rounded">
        {inventory.map((item, index) => (
          <Tile
            key={index}
            size={80}
            item={item}
            onClick={() => handleClick(item, index)}
            draggable={!!item}
            onDragStart={item ? handleDragStart(item, "inventory", index) : undefined}
            onDrop={handleDrop(handleDropOnTile, "inventory", index)}
            onDragOver={handleDragOver}
          />
        ))}
      </div>
    </div>
  );
};


export default Inventory;