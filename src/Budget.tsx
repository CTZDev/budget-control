export const Budget: React.FC = () => {
  return (
    <>
      <h3 className="p-4 font-semibold text-xl">PRESUPUESTO</h3>
      <form action="" className="flex flex-col gap-5 border rounded-lg p-6 text-left">
        <div className="form-control w-full">
          <label htmlFor="total-budget" className="block">
            Presupuesto:{" "}
          </label>
          <input
            type="text"
            className="border py-1.5 px-3 rounded-lg w-full"
            name="total-budget"
            id="total-budget"
            placeholder="Presupuesto S/."
          />
        </div>

        <div className="flex gap-3">
          <div className="form-control w-full">
            <label htmlFor="increment-budget" className="block">
              Aumentar Presupuesto:{" "}
            </label>
            <input
              type="text"
              className="border py-1.5 px-3 rounded-lg w-full"
              name="increment-budget"
              id="increment-budget"
              placeholder="S/.0"
            />
          </div>

          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold self-end"
          >
            Sumar
          </button>
        </div>

        <button className="bg-green-500 text-white py-2 px-4 rounded-md font-bold w-32 m-right">
          Guardar
        </button>
      </form>
    </>
  );
};
