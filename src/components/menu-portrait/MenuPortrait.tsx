import { Link } from "react-router-dom";
import closeIcon from "../../assets/images/icons/close-icon.png";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./style.css";

export const MenuPortrait = () => {
  const { menu, setMenu } = useContext(AppContext);

  const openMenu = () => {
    setMenu(!menu);
    console.log(menu)
  };

  return (
    <><div className="menu-container">
        <button onClick={openMenu} className="button-close-menu"><img src={closeIcon} alt="close-menu" /></button>
        <ul className="menu-content">
          <Link to="/eletronicos">
            <li className="item-categoria-portrait" onClick={openMenu}>eletrônicos</li>
          </Link>
          <Link to="/homens">
            <li className="item-categoria-portrait" onClick={openMenu}>homens</li>
          </Link>
          <Link to="/joalheria">
            <li className="item-categoria-portrait" onClick={openMenu}>joalheria</li>
          </Link>
          <Link to="/mulheres">
            <li className="item-categoria-portrait" onClick={openMenu}>mulheres</li>
          </Link>
        </ul>
      </div>
      
    </>
  );
};
