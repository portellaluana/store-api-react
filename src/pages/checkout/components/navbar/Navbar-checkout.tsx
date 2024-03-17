import { Link } from "react-router-dom";

export const NavbarCheckout = () => {
  function toTop(){
    window.scrollTo(0, 0);
  }
  return (
    <>
      <section className="nav-container ">
        <div className="nav-content nav-content-checkout">
          <Link className="navbar-brand" onClick={toTop} to="/homepage">
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
