import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { convertToEnglish } from "../../utils/convertColorAndSize";
import type { DuckInput } from "../../utils/types/DuckTypes";
import { useDucks } from "../../hooks/useDucks";

export const useDuckForm = (editMode: boolean) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { createDuck, updateDuck, getDuckById } = useDucks();

  const [initialValues, setInitialValues] = useState<DuckInput | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDuck = async () => {
      if (editMode && id) {
        setLoading(true);
        try {
          const data = await getDuckById(id);
          const { color, size } = data;
          const { color: spanishColor, size: spanishSize } = convertToEnglish(
            color,
            size,
            true
          );
          setInitialValues({ ...data, color: spanishColor, size: spanishSize });
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

  const submitDuck = async (data: DuckInput) => {
    try {
      const { color: englishColor, size: englishSize } = convertToEnglish(
        data.color,
        data.size
      );
      data.color = englishColor;
      data.size = englishSize;

      if (editMode && id) {
        await updateDuck(id, data);
        console.log("Patito actualizado ✅");
      } else {
        await createDuck(data);
        console.log("Patito creado ✅");
      }

      navigate("/almacen");
    } catch (err) {
      console.log("Error al guardar el patito ❌" + err);
    }
  };

  return {
    initialValues,
    loading,
    submitDuck,
  };
};
