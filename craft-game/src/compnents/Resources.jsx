import Tile from "./Tile"
import {objects} from "@data/objects"
import useInventory from "@contexts/inventory/useInventory";
import { useDragDrop } from "@hooks/useDragDrop";

const Resources = () => {
    const resources = objects.filter(object => object.type === "primary");
    const {addItem} = useInventory();
    const {handleDragStart, handleDragOver} = useDragDrop();

    return (
        <div className="flex flex-col gap-2 bg-gray-400 p-4 rounded" >
            <h2 className="text-2xl font-bold mb-2">Resurse</h2>
            {resources.map((item, index) =>
            <Tile 
              key={index} 
              item={item} 
              onClick={() => addItem(item)}
              onDragOver={handleDragOver}
              onDragStart={handleDragStart(item, "resources", index)}
              />
            )}
        </div>
    )
}
export default Resources;