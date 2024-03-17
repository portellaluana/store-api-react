import { Card } from "../card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";
import "./style.css";

export const Products = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
      <div className="container-vitrine-produtos">
        <h4>Nossos produtos</h4>
        <div className="vitrine-produtos">
          {products.map((product) => (
            <Card key={product.id} data={{ product }} />
          ))}
        </div>
      </div>
    </div>
  );
};
