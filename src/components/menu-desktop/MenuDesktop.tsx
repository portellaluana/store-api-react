import { Link } from "react-router-dom";
import "./style.css";

export const MenuDesktop = () => {
  return (
    <div className="categoria-container">
      <ul className="categoria-content">
        <Link to='/eletronicos'>
        <li className="item-categoria">eletrônicos</li>
        </Link>
      <Link to='/homens'>
        <li className="item-categoria">homens</li>
        </Link>
        <Link to='/joalheria'>
        <li className="item-categoria">joalheria</li>
        </Link>
        <Link to='/mulheres'>
        <li className="item-categoria">mulheres</li>
        </Link>
      </ul>
    </div>
  );
};
