import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <section className="nav-container">
        <div className="nav-content">
          <Link className="navbar-brand" to="/homepage">
            originals
          </Link>

          <Link className="not-found-btn" to="/homepage">
            continuar comprando
          </Link>
        </div>
      </section>
    </>
  );
};
