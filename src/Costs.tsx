export const Costs: React.FC = () => {
  return (
    <>
      <h3 className="p-4 font-semibold text-xl">GASTOS</h3>
      <form action="" className="flex flex-col gap-5 border rounded-lg p-6 text-left">
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
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="increment-budget" className="block">
            Monto:{" "}
          </label>
          <input
            type="text"
            className="border py-1.5 px-3 rounded-lg w-full"
            name="increment-budget"
            id="increment-budget"
            placeholder="Monto en S/."
          />
        </div>

        <button className="bg-green-500 text-white py-2 px-4 rounded-md font-bold w-32 m-right">
          Guardar
        </button>
      </form>
    </>
  );
};
