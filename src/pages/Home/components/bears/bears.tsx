import { create } from "zustand";
import "./bears.css";
import { combine } from "zustand/middleware";
import { useAnimalsStore } from "../../../../hooks/animal-store/animals-store";

const BearCounter = (): React.ReactNode => {
  const { animals, addAnimals } = useAnimalsStore();

  return (
    <div className="bear-counter-root">
      <p>{animals} bears in the zoo!</p>
      <button
        onClick={() => {
          addAnimals();
        }}
      >
        Add bears
      </button>
    </div>
  );
};

export default BearCounter;
