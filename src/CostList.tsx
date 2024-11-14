import { useContext } from "react";
import { ControlBudgetContext } from "./context/ControlBudgetContext";

export const CostList: React.FC = () => {
  const {
    listCostsForWeek: { allCostsForWeek },
  } = useContext(ControlBudgetContext);

  return (
    <>
      <h3 className="p-4 font-semibold text-2xl uppercase">Listado de Gastos Semanales</h3>
      <section>
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="text-center">
              <th className="px-4 py-2 bg-gray-200 text-gray-800 uppercase">Descripción</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800 uppercase">Monto</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800 uppercase">Acción</th>
            </tr>
          </thead>
          <tbody>
            {allCostsForWeek.length === 0 ? (
              <tr>
                <td colSpan={3}>
                  <span className="p-2 inline-block text-center w-full font-semibold text-lg">
                    No has realizado gastos 😎😎😎
                  </span>
                </td>
              </tr>
            ) : (
              allCostsForWeek.map((cost) => (
                <tr key={cost.currentCostItemDescription}>
                  <td className="px-3 py-1.5 text-center">{cost.currentCostItemDescription}</td>
                  <td className="px-3 py-1.5 text-center">S/. {cost.currentCostForItem}</td>
                  <td className="px-3 py-1.5 text-center">
                    <button className="bg-red-500 text-white px-2.5 py-1.5 rounded-lg hover:bg-red-600 focus:outline-none inline-flex gap-1.5 items-center font-bold">
                      <img src="/delete.svg" alt="delete" />
                      <span>Borrar</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </>
  );
};
