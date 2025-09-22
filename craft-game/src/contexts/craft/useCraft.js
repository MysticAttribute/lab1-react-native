import { useContext } from "react";
import CraftContext  from "./CraftContext";

const useCraft = () => {
  const context = useContext(CraftContext);

  if (!context) {
    throw new Error("useCraft trebuie folosit în interiorul CraftProvider");
  }

  return context;
};

export default useCraft;
