import { useContext, useRef, useState } from "react";
import { ControlBudgetContext } from "./context/ControlBudgetContext";

export const Budget: React.FC = () => {
  const { budgetInfo } = useContext(ControlBudgetContext);
  const { currentBudget, handleCurrentBudget, incrementBudget, handleIncrementBudget } = budgetInfo;
  const [isActiveIncrementBudget, setisActiveIncrementBudget] = useState(false);
  const messageRef = useRef<HTMLSpanElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    if (!currentBudget) return alert("Debes ingresar un presupuesto inicial!!! 👋");
    if (!incrementBudget && isActiveIncrementBudget)
      return alert("Debes ingresar el monto adicional a guardar!!!👋");

    if (currentBudget !== null && !isActiveIncrementBudget) {
      setisActiveIncrementBudget(!isActiveIncrementBudget);
    }

    if (currentBudget && incrementBudget) {
      handleCurrentBudget(currentBudget + incrementBudget);
      handleIncrementBudget(Number(null));
    }

    if (messageRef.current) {
      messageRef.current.classList.remove("hidden");
      messageRef.current.classList.add("inline-block");
      setTimeout(() => {
        messageRef?.current?.classList.add("hidden");
        messageRef?.current?.classList.remove("inline-block");
      }, 2500);
    }
  };

  return (
    <>
      <h3 className="p-4 font-semibold text-2xl">PRESUPUESTO</h3>
      <form
        action=""
        className="flex flex-col gap-5 border rounded-lg p-6 text-left"
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full">
          <label
            htmlFor="total-budget"
            className={`block ${isActiveIncrementBudget ? "text-gray-300" : "text-black"}`}
          >
            Presupuesto Inicial:{" "}
          </label>
          <input
            type="number"
            className={`border py-1.5 px-3 rounded-lg w-full ${
              isActiveIncrementBudget ? "text-gray-300" : "text-black"
            }`}
            name="total-budget"
            id="total-budget"
            placeholder="Presupuesto en S/."
            value={currentBudget || ""}
            onChange={(e) => handleCurrentBudget(Number(e.target.value))}
            required
            disabled={isActiveIncrementBudget}
          />
        </div>

        <div className="form-control w-full">
          <label
            htmlFor="increment-budget"
            className={`block ${!isActiveIncrementBudget ? "text-gray-300" : "text-black"}`}
          >
            Aumentar Presupuesto:{" "}
          </label>
          <input
            type="text"
            className={`border py-1.5 px-3 rounded-lg w-full ${
              !isActiveIncrementBudget ? "text-gray-300" : "text-black"
            }`}
            name="increment-budget"
            id="increment-budget"
            placeholder="S/.0"
            disabled={!isActiveIncrementBudget}
            value={incrementBudget || ""}
            onChange={(e) => handleIncrementBudget(Number(e.target.value))}
          />

          <span
            ref={messageRef}
            className="p-2.5 mt-3 rounded-lg bg-blue-500 text-white font-bold hidden"
          >
            Total Presupuesto: S/. {currentBudget} nuevos soles
          </span>
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
