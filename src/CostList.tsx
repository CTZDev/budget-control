export const CostList: React.FC = () => {
  return (
    <>
      <h3 className="p-4 font-semibold text-2xl uppercase">Listado de Gastos Semanales</h3>
      <section>
        <table className="table-auto w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="text-center">
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Descripción</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Monto</th>
              <th className="px-4 py-2 bg-gray-200 text-gray-800">Quitar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200 text-center">
              <td className="px-3 py-1">Transporte</td>
              <td className="px-3 py-1">S/. 200</td>
              <td className="px-3 py-1">
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none">
                  Borrar
                </button>
              </td>
            </tr>
            <tr className="border-t border-gray-200 text-center">
              <td className="px-3 py-1">Transporte</td>
              <td className="px-3 py-1">S/. 400</td>
              <td className="px-3 py-1">
                <button className="bg-red-500 text-white px-3 py-0.5 rounded-lg hover:bg-red-600 focus:outline-none">
                  Borrar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};
