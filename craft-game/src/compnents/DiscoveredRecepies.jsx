import { useState } from "react";
import list from "@assets/list.png";
import close from "@assets/close.png";
import { objects } from "@data/objects";
import  useDiscovered  from "@contexts/discovered/useDiscovered";
import WinScreen from "./WinScreen";

const DiscoveredRecepies = () => {
  const [open, setOpen] = useState(false);
  const { discovered } = useDiscovered();
  const won = discovered.find((recipe) => recipe.id === objects.length);
  console.log(won);

    return (
        <>
        <button onClick={() => setOpen(true)} className="cursor-pointer ">
            <img src={list} alt="list" className="w-12 h-12" />
        </button>

        {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded shadow-lg max-w-[80vw] max-h-[80vh] overflow-y-auto relative">
            <div className="w-full flex justify-between items-center p-4 bg-white z-10 shadow rounded-t-lg">
              <h2 className="text-lg font-semibold mr-6 text-black">Discovered Recipes</h2>
            <button onClick={() => setOpen(false)} className="cursor-pointer ">
                <img src={close} alt="close" className="w-6 h-6" />
            </button>
            </div>

            <div className="flex flex-col gap-2 px-6 py-4">
              { discovered.length === 0 ? (
                <p className="text-gray-500 ">No discovered recipes yet.</p>
              ) : (
                discovered.map((recipe) => (
                  <div key={recipe.id} className="flex items-center gap-2">
                    <img src={recipe.icon} alt={recipe.name} className="w-8 h-8 rounded" />
                    <h3 className="text-black font-semibold text-left">{recipe.name}</h3>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        )}

        {won && <WinScreen lastRecipe={won}/>}

        </>
    )
}

export default DiscoveredRecepies