import useInventory from "@contexts/inventory/useInventory";
import useCraft from "@contexts/craft/useCraft";
import { useDragDrop } from "@hooks/useDragDrop";
import useResetGame from "@hooks/useResetGame";

const Garbage = () => {
    const { removeItem: removeItemFromInventory, clearInventory } = useInventory();
    const { removeItem: removeItemFromCraft } = useCraft();
    const { handleDrop, handleDragOver } = useDragDrop();
    const { resetGame} = useResetGame();

    const handleDropOnGarbage = (item, fromZone, fromIndex) => {
    if (fromZone === "craft") {
        removeItemFromCraft(fromIndex);
    }
    if (fromZone === "inventory") {
        removeItemFromInventory(fromIndex);
    }
    };

    return (
        <div className="flex flex-col items-center gap-4" >
            <div className="bg-red-300 border-2 border-dashed border-red-800 w-48 h-36 flex-1 flex-col p-2 rounded-xl"
                onDrop={handleDrop(handleDropOnGarbage, "garbage")}
                onDragOver={handleDragOver}
            >
                <h2 className="text-lg mb-4 text-center text-red-800">Garbage</h2>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <button 
                    className="bg-red-500 text-white rounded py-2 hover:bg-red-600 px-2"
                    onClick={clearInventory}
                >
                    Clear Inventory
                </button>
                <button 
                    className="bg-red-500 text-white rounded py-2 hover:bg-red-600 px-2"
                    onClick={() => resetGame()}
                >
                    Reset Game
                </button>
            </div>
        </div>
    )
}

export default Garbage