import { Card } from "../card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";

export const Products = () => {
  const { products, setProducts, productNotFound } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <div>
    {!productNotFound ? <div className="container-vitrine-produtos">
    <h4>Vitrine de produtos</h4>
    <div className="vitrine-produtos">
        {products.map((product) => (
          <Card key={product.id} data={{ product }} />
        ))}
      </div>
  </div> : ""
  }
    </div>
  );
};
