import { Budget } from "./Budget";
import "./BudgetApp.css";
import { BudgetContainer } from "./BudgetContainer";
import { CostList } from "./CostList";
import { Costs } from "./Costs";
import { CostsContainer } from "./CostsContainer";
import { Header } from "./Header";

function BudgetApp() {
  return (
    <>
      <Header title="Control de Presupuesto y Gasto Semanal" />
      <main className="flex gap-6 mb-12">
        <BudgetContainer className="flex-1">
          <Budget />
        </BudgetContainer>
        <CostsContainer className="flex-1">
          <Costs />
        </CostsContainer>
      </main>

      <CostList />
    </>
  );
}

export default BudgetApp;
