import { Card } from "../../components/card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";
import { Navbar } from "../../components/navbar/Navbar";
import { Banner } from "../../components/banner/Banner";
import { Minicart } from "../../components/minicart/Minicart";
import homens from "../../assets/images/web-banner/homens.png";

export const Homens = () => {
  const { products, setProducts,cartVisible } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  
  const items = products.filter((product) =>
  product.category === "men's clothing"
);

  return (
    <div>
      <Minicart />
      <Navbar />
      <Banner>
        <img className="img-banner" src={homens} alt="web-banner-moda-masculina"/>
      </Banner>
      <div className="container-vitrine-produtos">
        <h4>Moda masculina</h4>
        <div className="vitrine-produtos">
          {items.map((item) => (
            <Card key={item.id} data={{ product: item }} />
          ))}
        </div>
      </div>
    </div>
  );
};
