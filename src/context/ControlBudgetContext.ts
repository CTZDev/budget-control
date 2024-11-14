import { createContext } from "react";
import { BudgetContextType } from "../types/controlBudgetContext";

export const ControlBudgetContext = createContext<BudgetContextType>({
  budgetInfo: {
    currentBudget: null,
    handleCurrentBudget: () => {},
    incrementBudget: null,
    handleIncrementBudget: () => {},
  },
  costsInfo: {
    currentCostItemDescription: "",
    handleCurrentCostItemDescription: () => {},
    currentCostForItem: 0,
    handleCurrentCostForItem: () => {},
  },
  listCostsForWeek: {
    allCostsForWeek: [{ currentCostItemDescription: "", currentCostForItem: 0 }],
    handleListViewCostsForWeek: () => {},
  },
});
