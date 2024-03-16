import { Navbar } from '../../components/navbar/Navbar';

export const APIError = () => {

  const toHomepage = () => {
    window.location.href = '/homepage';
  };

  return (
  <>
  <Navbar/>
    <div className="not-found-title-container">
        <div className="not-found-title-content">
        <h4 className="not-found-title not-found-title-ops">Ops!</h4>
        <h4 className="not-found-title ">
        <span className="search-item-not-found"> </span>
        Estamos passando por uma instabilidade, tente novamente em minutos.
        </h4>
        <button className="not-found-btn" onClick={toHomepage}>
        Voltar pra home
        </button>
        </div>
        </div>
       </>
      );
    };
    
    