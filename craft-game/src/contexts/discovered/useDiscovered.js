import { useContext } from "react";
import DiscoveredContext from "@contexts/discovered/DiscoveredContext";

const useDiscovered = () => {
  const context = useContext(DiscoveredContext);

  if (!context) {
    throw new Error("useDiscovered trebuie folosit în interiorul DiscoveredProvider");
  }

  return context;
};

export default useDiscovered;
