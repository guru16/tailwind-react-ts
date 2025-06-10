import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import './index.css'; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Open Sans, sans-serif",
      }}
      defaultColorScheme="light"
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
