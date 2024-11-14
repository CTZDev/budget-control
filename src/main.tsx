import "@fontsource/questrial";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BudgetApp from "./BudgetApp.tsx";
import "./index.css";
import { ControlBudgetProvider } from "./providers/ControlBudgetProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ControlBudgetProvider>
      <BudgetApp />
    </ControlBudgetProvider>
  </StrictMode>
);
