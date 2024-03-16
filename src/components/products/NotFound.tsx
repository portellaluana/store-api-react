export const NotFound = () => {

  const valorInput = sessionStorage.getItem("item-procurado");

  const refreshPage = () => {
    window.location.href = '/homepage';
  };

  return (
    <div className="not-found-title-container">
        <div className="not-found-title-content">
          <h4 className="not-found-title not-found-title-ops">Ops!</h4>
          <h4 className="not-found-title ">
            <span className="search-item-not-found">" {valorInput} " </span>
            não foi encontrado.
          </h4>
          <button className="not-found-btn" onClick={refreshPage}>
            Voltar pra home
          </button>
        </div>
    </div>
  );
};
