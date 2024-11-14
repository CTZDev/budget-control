type BudgetInfo = {
  currentBudget: number | null;
  handleCurrentBudget: (value: number) => void;
  incrementBudget: number | null;
  handleIncrementBudget: (value: number) => void;
};

type CostsInfo = {
  currentCostItemDescription: string;
  handleCurrentCostItemDescription: (description: string) => void;
  currentCostForItem: number | null;
  handleCurrentCostForItem: (value: number) => void;
};

export type CostsItem = {
  currentCostItemDescription: CostsInfo["currentCostItemDescription"];
  currentCostForItem: CostsInfo["currentCostForItem"];
};

export type BudgetContextType = {
  budgetInfo: BudgetInfo;
  costsInfo: CostsInfo;
  listCostsForWeek: {
    allCostsForWeek: Array<CostsItem>;
    handleListViewCostsForWeek: (description: string, cost: number) => void;
  };
};
