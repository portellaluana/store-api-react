import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

interface CategoriaProps {
  data: {
    categoria: string;
  };
}
export const Categoria: React.FC<CategoriaProps> = ({ data }) => {
  const { categorias, setCategorias } = useContext(AppContext);

  if (!data) {
    return null;
  }

  const { categoria } = data;
  setCategorias(data);

  return <>{categoria}</>;
};
