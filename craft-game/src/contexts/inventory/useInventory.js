import { useContext } from "react";
import InventoryContext from "@contexts/inventory/InventoryContext";

const useInventory = () => {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useInventory trebuie folosit în interiorul InventoryProvider");
  }

  return context;
};

export default useInventory;
