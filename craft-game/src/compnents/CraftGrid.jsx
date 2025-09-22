import Tile from "./Tile";
import useCraft from "@contexts/craft/useCraft";
import useInventory from "@contexts/inventory/useInventory";
import { useDragDrop } from "@hooks/useDragDrop";
import Result from "./Result";

const CraftGrid = () => {
    const { craftCells, removeItem:removeItemFromCraft, moveItemTo } = useCraft();
    const { addItem:addItemToInventory, removeItem:removeItemFromInventory } = useInventory();
    const { handleDrop, handleDragOver, handleDragStart } = useDragDrop();

    const handleDropOnTile = (item, fromZone, fromIndex, toZone, toIndex) => {
      if (fromZone === "inventory") {
        const evictedItem = moveItemTo(null, toIndex, item);
        removeItemFromInventory(fromIndex);

        if (evictedItem) {

        addItemToInventory(evictedItem, fromIndex);
        }
      }
      if (fromZone === "craft") {
        moveItemTo(fromIndex, toIndex);
      }
    };

    const handleClick = (item, index) => {
        const addedSuccessfully = addItemToInventory(item);
        if(addedSuccessfully) removeItemFromCraft(index);
    }

    return (
        <div className="flex gap-12 ">
        <div className="grid grid-cols-3 gap-2 bg-gray-400 p-4 rounded ">
            {craftCells.map((item, index) => 
                <Tile
                    key={index}
                    size={85}
                    item={item}
                    onClick={() => handleClick(item, index)}
                    onDrop={handleDrop(handleDropOnTile, "craft", index)}
                    onDragOver={handleDragOver}
                    onDragStart={item ? handleDragStart(item, "craft", index) : undefined}
                />
            )}
        </div>

        <Result craftCells={craftCells} addItemToInventory={addItemToInventory} />
        </div>
        
    );
}

export default CraftGrid;