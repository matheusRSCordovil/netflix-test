import { createContext, useState, ReactNode } from "react";

const ALERT_TIME = 5000;

// Define types for the alert state
interface AlertState {
  text: string;
  type: string;
}

// Define the context value type
interface AlertContextType extends AlertState {
  setAlert: (text: string, type: string) => void;
}

// Initial state with type
const initialState: AlertState = {
  text: "",
  type: "",
};

// Create context with the default value
const AlertContext = createContext<AlertContextType>({
  ...initialState,
  setAlert: () => {},
});

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("");

  const setAlert = (text: string, type: string) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
