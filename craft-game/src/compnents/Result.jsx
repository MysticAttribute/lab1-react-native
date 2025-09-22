import Tile from "./Tile";
import arrow from "@assets/arrow.png";
import { useState } from "react";
import useCraft from "@contexts/craft/useCraft";
import { getResult } from "@utils/getResult";
import useDiscovered from "@contexts/discovered/useDiscovered";

const Result = ({ craftCells, addItemToInventory }) => {
    const [result, setResult] = useState(null);
    const [success, setSuccess] = useState(false);
    const { clearCraft } = useCraft();
    const { addItem: addItemToDiscovered } = useDiscovered();

  const arrowClick = () => {
    if (!craftCells.some(i => i !== null)) return;
    const matchedCraft = getResult(craftCells);
    console.log(matchedCraft);
    
    if (matchedCraft === null) return;
    
    const roll = Math.random() * 100;
    console.log("chance-", matchedCraft.chance, "roll-", roll);

    if (roll < matchedCraft.chance * 100) {
        setSuccess(true);
            setResult(matchedCraft);
    } else {
        setSuccess(false);
    }

    clearCraft();
};

    const handleClickResult = () => {
      if (!result) return;
      addItemToInventory(result);
      addItemToDiscovered(result);
      setResult(null);
      setSuccess(false);
    }
    

    return (
        <div className="flex items-center gap-16">
            <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-black font-semibold">Click to Craft</span>
                <button onClick={arrowClick} className="cursor-pointer ">
                    <img src={arrow} alt="arrow" className="w-12 h-12" />
                </button>
            </div>
            
            <div 
                className="flex items-center justify-center bg-gray-400 rounded w-30 h-30">
                <Tile item={success ? result : null} size={96} onClick={handleClickResult} />
            </div>
        </div>
    )
};

export default Result;