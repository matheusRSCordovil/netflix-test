import React, { createContext, useState, ReactNode } from "react";

// Define the context's data structure
interface DetailContextProps {
  details: {
    title: string;
    releaseDate: string;
    rating: number;
    description: string;
    posterPath: string;
  };
  setDetails: (details: Partial<DetailContextProps["details"]>) => void;
}

// Create the context
const DetailContext = createContext<DetailContextProps | undefined>(undefined);

const DetailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Consolidated state object
  const [details, setDetailsState] = useState<DetailContextProps["details"]>({
    title: "",
    releaseDate: "",
    rating: 0,
    description: "",
    posterPath: "",
  });

  // Helper function to update the details object
  const setDetails = (
    updatedFields: Partial<DetailContextProps["details"]>
  ) => {
    setDetailsState((prevDetails) => ({ ...prevDetails, ...updatedFields }));
  };

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailContext.Provider>
  );
};

export { DetailContext, DetailProvider };
