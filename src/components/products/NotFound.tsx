import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const NotFound = () => {
  const { productNotFound, searchItem } = useContext(AppContext);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className="not-found-title-container">
      {productNotFound ? (
        <div className="not-found-title-content">
          <h4 className="not-found-title not-found-title-ops">Ops!</h4>
          <h4 className="not-found-title ">
            <span className="search-item-not-found">" {searchItem} " </span>
            não foi encontrado.
          </h4>
          <button className="not-found-btn" onClick={refreshPage}>
            Voltar
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
