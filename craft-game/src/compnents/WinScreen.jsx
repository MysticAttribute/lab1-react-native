import useResetGame from "@hooks/useResetGame";
const WinScreen = ({lastRecipe}) => {
    const {resetGame} = useResetGame();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded shadow-lg max-w-[80vw] max-h-[80vh] overflow-y-auto relative p-8 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-black">Congratulations</h2>
              <p className="text-black mb-4">You discovered {lastRecipe.name} recipe</p>
              <button onClick={() => resetGame()} className="cursor-pointer bg-red-500 text-white rounded py-2 hover:bg-red-600 px-2">
                Play Again
              </button>
            </div>
        </div>
    )
}

export default WinScreen;