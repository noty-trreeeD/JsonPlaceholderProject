import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";

import { App } from "./app/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CssBaseline />
        <App />
    </StrictMode>
);