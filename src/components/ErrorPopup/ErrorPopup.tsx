import { Alert } from "@mui/material";
import useAlert from "../../Hooks/AlertHook";

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <Alert
        severity={type as "error" | "warning" | "info" | "success"}
        sx={{
          position: "absolute",
          zIndex: 10,
        }}
      >
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
