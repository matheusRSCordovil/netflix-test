import { useContext } from "react";
import { DetailContext } from "../Context/DetailContext";

// Custom hook for consuming the context safely
export const useDetailContext = () => {
  const context = useContext(DetailContext);
  if (!context) {
    throw new Error("useDetailContext must be used within a DetailProvider");
  }
  return context;
};
