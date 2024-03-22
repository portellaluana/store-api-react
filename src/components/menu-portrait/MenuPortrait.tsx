import { Link, useNavigate } from "react-router-dom";
import closeIcon from "../../assets/images/icons/close-icon.png";

import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import "./style.css";
import { UseCategories } from "../../hook/UseCategories";

export const MenuPortrait = () => {
  const { menu, setMenu, categorias, setCategorias  } = useContext(AppContext);
  const navigate = useNavigate();

  const openMenu = () => {
    setMenu(!menu);
  };

  function categoriaSelecionada(){
    window.scrollTo(0, 0);
    openMenu()
  }

  useEffect(() => {
    UseCategories().then((response) => {
      setCategorias(response);
    });
  }, []);

  const handleClick = (categoria) => {
    navigate(`/categoria/${categoria}`);
    categoriaSelecionada()
  };

  return (
    <><div className="menu-container">
        <button onClick={openMenu} className="button-close-menu"><img src={closeIcon} alt="close-menu" /></button>
        <ul className="menu-content">
               {categorias.map((categoria, index) => (
          <li className="item-categoria-portrait" key={index} onClick={() => handleClick(categoria)}>
            <Link to={`/categoria/${categoria}`} className="link-categoria">
              {categoria}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      
    </>
  );
};
