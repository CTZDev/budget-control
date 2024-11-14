import React, { useState } from "react";
import { ControlBudgetContext } from "../context/ControlBudgetContext";
import type { CostsItem } from "../types/controlBudgetContext";

interface Props {
  children: React.ReactNode;
}

export const ControlBudgetProvider: React.FC<Props> = ({ children }) => {
  const [currentBudget, setCurrentBudget] = useState<number>(0);
  const [incrementBudget, setIncrementBudget] = useState<number>(0);
  const [currentCostItemDescription, setCurrentCostItemDescription] = useState<string>("");
  const [currentCostForItem, setCurrentCostForItem] = useState<number>(0);
  const [allCostsForWeek, setAllCostsForWeek] = useState<Array<CostsItem>>([]);

  const handleCurrentBudget = (value: number) => {
    setCurrentBudget(value);
  };

  const handleIncrementBudget = (valueIncrement: number) => {
    setIncrementBudget(valueIncrement);
  };

  const handleCurrentCostItemDescription = (description: string) => {
    setCurrentCostItemDescription(description);
  };

  const handleCurrentCostForItem = (value: number) => {
    setCurrentCostForItem(value);
  };

  const handleListViewCostsForWeek = (description: string, cost: number) => {
    setAllCostsForWeek((prevCosts) => [
      ...prevCosts,
      { currentCostItemDescription: description, currentCostForItem: cost },
    ]);
  };

  const budget = {
    currentBudget,
    handleCurrentBudget,
    incrementBudget,
    handleIncrementBudget,
  };

  const costs = {
    currentCostItemDescription,
    handleCurrentCostItemDescription,
    currentCostForItem,
    handleCurrentCostForItem,
  };

  const listsCostsInWeek = {
    allCostsForWeek,
    handleListViewCostsForWeek,
  };

  return (
    <ControlBudgetContext.Provider
      value={{ budgetInfo: budget, costsInfo: costs, listCostsForWeek: listsCostsInWeek }}
    >
      {children}
    </ControlBudgetContext.Provider>
  );
};
