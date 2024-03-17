import { Link } from "react-router-dom";
import "./style.css";

function categoriaSelecionada(){
  window.scrollTo(0, 0);
}

export const MenuDesktop = () => {
  return (
    <div className="categoria-container">
      <ul className="categoria-content">
        <Link to='/eletronicos'>
        <li className="item-categoria" onClick={categoriaSelecionada}>eletrônicos</li>
        </Link>
      <Link to='/homens'>
        <li className="item-categoria" onClick={categoriaSelecionada}>Masculino</li>
        </Link>
        <Link to='/joalheria'>
        <li className="item-categoria" onClick={categoriaSelecionada}>joalheria</li>
        </Link>
        <Link to='/mulheres'>
        <li className="item-categoria" onClick={categoriaSelecionada}>feminino</li>
        </Link>
      </ul>
    </div>
  );
};
