import { useState, useEffect } from "react";
import DiscoveredContext from "@contexts/discovered/DiscoveredContext";


const DiscoveredProvider = ({ children }) => {
  const [discovered, setDiscovered] = useState(() => {
    const saved = localStorage.getItem("discovered");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("discovered", JSON.stringify(discovered));
  }, [discovered]);

const addItem = (item) => {
  setDiscovered(prev => {
    if (prev.some(i => i.id === item.id)) {
      return prev;
    }
    return [...prev, item];
  });
};

  const clearDiscovered = () => setDiscovered([]);

  return (
    <DiscoveredContext.Provider value={{ discovered, addItem, clearDiscovered }}>
      {children}
    </DiscoveredContext.Provider>
  );
};

export default DiscoveredProvider;
