import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import DuckForm from "../DuckForm/DuckForm";
import { useNavigate, useParams } from "react-router";
import { useDucks } from "../../hooks/useDucks";
import type { DuckInput } from "../../types/DuckTypes";

type DuckFormPageProps = {
  editMode?: boolean;
};

//DELETE editMode
export const AddDuckPage = ({ editMode = false }: DuckFormPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { createDuck, updateDuck } = useDucks();
  const [initialValues, setInitialValues] = useState<DuckInput | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadDuck = async () => {
      if (editMode && id) {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:3000/ducks/${id}`);
          if (!response.ok) throw new Error("No se pudo obtener el patito");
          const data = await response.json();
          setInitialValues(data);
        } catch (error) {
          console.error("Error cargando el patito:", error);
          navigate("/almacen");
        } finally {
          setLoading(false);
        }
      }
    };

    loadDuck();
  }, [editMode, id, navigate]);

  const addDuck = async (data: DuckInput) => {
    try {
      if (editMode && id) {
        await updateDuck(id, data);
        alert("Patito actualizado ✅");
      } else {
        await createDuck(data);
        alert("Patito creado ✅");
      }
      navigate("/almacen");
    } catch (err) {
      alert("Error al guardar el patito ❌" + err);
    }
  };

  if (editMode && loading) return <p className="p-4">Cargando patito...</p>;

  return (
    <Card title={editMode ? "Editar Patito" : "Nuevo Patito"}>
      <DuckForm
        onSubmit={addDuck}
        initialValuesEdit={initialValues ?? undefined}
        editMode={editMode}
      />
    </Card>
  );
};
