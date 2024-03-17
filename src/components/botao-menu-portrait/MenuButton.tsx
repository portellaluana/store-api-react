import React, { useContext } from "react";
import iconeMenu from "../../assets/images/icons/menu.png";
import { AppContext } from "../../context/AppContext";
import "../menu-portrait/style.css";
import { MenuPortrait } from "../menu-portrait/MenuPortrait";
import "./style.css";

interface MinicartButtonProps {}

export const MenuButton: React.FC<MinicartButtonProps> = () => {
    const { menu, setMenu } = useContext(AppContext);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
    <button onClick={openMenu} className="icone-menu">
      <img src={iconeMenu} alt="icone-menu" />
    </button>
    {menu ? <MenuPortrait/> : null}
    </>
  );
};
