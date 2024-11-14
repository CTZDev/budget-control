import { useContext } from "react";
import { ControlBudgetContext } from "./context/ControlBudgetContext";

export const Costs: React.FC = () => {
  const {
    budgetInfo: { currentBudget },
    costsInfo,
    listCostsForWeek,
  } = useContext(ControlBudgetContext);

  const {
    currentCostForItem,
    handleCurrentCostForItem,
    currentCostItemDescription,
    handleCurrentCostItemDescription,
  } = costsInfo;

  const { handleListViewCostsForWeek } = listCostsForWeek;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (!currentBudget) return alert("Debes ingresar un presupuesto inicial 😓😓😓");
    if (!currentCostItemDescription)
      return alert("Debes ingresar la descripción del Gasto (Consumo) 😓😓😓");
    if (!currentCostForItem) return alert("Debes ingresar el monto gastado. 😓😓😓");

    handleListViewCostsForWeek(currentCostItemDescription, currentCostForItem);
    handleCurrentCostItemDescription("");
    handleCurrentCostForItem(Number(null));
  };

  return (
    <>
      <h3 className="p-4 font-semibold text-2xl">GASTOS</h3>
      <form
        action=""
        className="flex flex-col gap-5 border rounded-lg p-6 text-left"
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full">
          <label htmlFor="total-budget" className="block">
            Gasto:{" "}
          </label>
          <input
            type="text"
            className="border py-1.5 px-3 rounded-lg w-full"
            name="total-budget"
            id="total-budget"
            placeholder="Descripción del Gasto S/."
            required
            value={currentCostItemDescription}
            onChange={(e) => handleCurrentCostItemDescription(e.target.value)}
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="increment-budget" className="block">
            Monto:{" "}
          </label>
          <input
            type="number"
            className="border py-1.5 px-3 rounded-lg w-full"
            name="increment-budget"
            id="increment-budget"
            placeholder="Monto en S/."
            required
            value={currentCostForItem || ""}
            onChange={(e) => handleCurrentCostForItem(Number(e.target.value))}
          />
        </div>

        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md font-bold w-32 m-right inline-flex gap-1.5 items-center"
          onSubmit={handleSubmit}
        >
          <img src="/save.svg" alt="Save Costs" />
          <span>Guardar</span>
        </button>
      </form>
    </>
  );
};
