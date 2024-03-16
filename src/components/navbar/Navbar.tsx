import { SearchBar } from "../searchBar/SearchBar";
import { MinicartButton } from "../botao-minicart/MinicartButton";
import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <section className="nav-container">
      <div className="nav-content">
      <Link className="navbar-brand" to="/homepage">
      Originals</Link>
       
        <SearchBar />
        <MinicartButton />
      </div>
    </section>
  );
};
