import "./style.css";
import { UseCategories } from "../../hook/UseCategories";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

export const MenuDesktop = () => {
  const { categorias, setCategorias } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    UseCategories().then((response) => {
      setCategorias(response);
    });
  }, []);

  const handleClick = (categoria) => {
    navigate(`/categoria/${categoria}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="categoria-container">
      <ul className="categoria-content">
        {categorias.map((categoria, index) => (
          <li className="item-categoria" key={index} onClick={() => handleClick(categoria)}>
            <Link to={`/categoria/${categoria}`} className="link-categoria">
              {categoria}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
