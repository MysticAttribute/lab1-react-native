import { useState, useEffect } from "react";
import useDiscovered from "@contexts/discovered/useDiscovered";
import {objects} from "@data/objects";

const PossibleCrafts = () => {  
  const { discovered } = useDiscovered();
  const [possibleCrafts, setPossibleCrafts] = useState([]);

    useEffect(() => {
    const possible = objects
        .filter((item) => {
        if (item.type === "primary") return false;
        if (discovered.some((d) => d.id === item.id)) return false;
        if (!item.ingredients?.length) return false;

        return item.ingredients.every((ingredientId) => {
            if (ingredientId === null) return true;

            const ingredientObj = objects.find((o) => o.id === ingredientId);
            if (!ingredientObj) return false;

            return (
            ingredientObj.type === "primary" ||
            discovered.some((d) => d.id === ingredientObj.id)
            );
        });
        })
        .slice(0, 3);

    setPossibleCrafts(possible);
    }, [discovered]);


    return (
        <div className="flex flex-col bg-gray-400 p-4 rounded gap-2">
            <h2 className="text-2xl font-bold mb-2">Possible crafts</h2>
                {possibleCrafts.length === 0 && <p className="text-gray-500 ">No possible crafts.</p>}
                {possibleCrafts.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-gray-200 p-2 rounded">
                        <img src={item.icon} alt={item.name} className="w-8 h-8 rounded" />
                        <div className="flex flex-col">
                            <h3 className="text-black font-semibold text-left">{item.name}</h3>
                            <p className="text-gray-500 text-left">{item.description}</p>
                        </div>
                        
                    </div>
                ))}
        </div>
    )
}

export default PossibleCrafts;