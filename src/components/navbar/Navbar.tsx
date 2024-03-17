import { SearchBar } from "../searchBar/SearchBar";
import { MinicartButton } from "../botao-minicart/MinicartButton";
import { Link } from "react-router-dom";
import "./style.css";
import { MenuDesktop } from "../menu-desktop/MenuDesktop";
import { MenuButton } from "../botao-menu-portrait/MenuButton";
import { useEffect, useState } from "react";


export const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 970);

  function toTop(){
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 970);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <>
      {isDesktop ? (
        <section className="nav-container">
          <div className="nav-content">
            <Link className="navbar-brand" onClick={toTop} to="/homepage">
              Originals
            </Link>
            <MenuDesktop />
            <SearchBar />
            <MinicartButton />
          </div>
        </section>
      ) : (
        <section className="nav-container">
          <div className="nav-content">
          <div className="menu-content-portrait">
            <MenuButton />
            <Link className="navbar-brand" to="/homepage">
              Originals
            </Link>
            <MinicartButton />
            </div>

            <div className="container-search">
            <SearchBar />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
