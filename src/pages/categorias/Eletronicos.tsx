import { Card } from "../../components/card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";
import { Navbar } from "../../components/navbar/Navbar";
import { Slider } from "../../components/slider/Slider";
import { Minicart } from "../../components/minicart/Minicart";

export const Eletronicos = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const items = products.filter((product) =>
    product.category.includes("electronics")
  );

  return (
    <div>
      <Minicart />
      <Navbar />
      <Slider />
      <div className="container-vitrine-produtos">
        <h4>Categoria Eletrônicos</h4>
        <div className="vitrine-produtos">
          {items.map((item) => (
            <Card key={item.id} data={{ product: item }} />
          ))}
        </div>
      </div>
    </div>
  );
};
