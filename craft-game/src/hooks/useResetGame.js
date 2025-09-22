import useInventory from "@contexts/inventory/useInventory";
import useCraft from "@contexts/craft/useCraft";
import useDiscovered from "@contexts/discovered/useDiscovered";

const useResetGame = () => {
    const { clearInventory } = useInventory();
    const { clearCraft } = useCraft();
    const { clearDiscovered } = useDiscovered();

    const resetGame = () => {
        clearInventory();
        clearCraft();
        clearDiscovered();
    };

    return { resetGame };
};

export default useResetGame;