import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { replace } from "react-router-dom";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      preventAssignment: true,
      values: {
        "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
      },
    }),
    replace({
      preventAssignment: true,
      values: {
        "process.env.VITE_API_TOKEN": JSON.stringify(
          process.env.VITE_API_TOKEN
        ),
      },
    }),
  ],
});
