import { useState } from "react";
import type { DuckInput } from "../DuckForm/DuckForm";
import Card from "../../components/Card/Card";
import DuckForm from "../DuckForm/DuckForm";

type Duck = DuckInput & { id: number };

export const AddDuck = () => {
  const [ducks, setDucks] = useState<Duck[]>([]);

  const addDuck = (duck: DuckInput) => {
    const newDuck: Duck = { ...duck, id: Date.now() };
    setDucks((prev) => [...prev, newDuck]);
  };
  return (
    <Card title="Nuevo Patito">
      <DuckForm onSubmit={addDuck} />
    </Card>
  );
};
