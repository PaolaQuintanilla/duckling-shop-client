import Card from "../../../components/Card/Card";
import DuckForm from "../../../components/DuckForm/DuckForm";
import { useDuckForm } from "../../hooks/useAddDuck";

type DuckFormPageProps = {
  editMode?: boolean;
};

export const AddDuckPage = ({ editMode = false }: DuckFormPageProps) => {
  const { initialValues, loading, submitDuck } = useDuckForm(editMode);

  if (editMode && loading) return <p className="p-4">Cargando patito...</p>;

  return (
    <Card title={editMode ? "Editar Patito" : "Nuevo Patito"}>
      <DuckForm
        onSubmit={submitDuck}
        initialValuesEdit={initialValues ?? undefined}
        editMode={editMode}
      />
    </Card>
  );
};
