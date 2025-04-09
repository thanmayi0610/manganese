import "./tigers.css";
import { useAnimalsStore } from "../../../../hooks/animal-store/animals-store";

const Tigers = (): React.ReactNode => {
  const { animals, addAnimals } = useAnimalsStore();

  return (
    <div className="tigers-root">
      <p>{animals} tigers in the zoo!</p>
      <button
        onClick={() => {
          addAnimals();
        }}
      >
        Add tigers
      </button>
    </div>
  );
};

export default Tigers;