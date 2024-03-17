import { Card } from "../../components/card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";
import { Navbar } from "../../components/navbar/Navbar";
import { Banner } from "../../components/banner/Banner";
import { Minicart } from "../../components/minicart/Minicart";
import eletronicos from "../../assets/images/web-banner/eletronicos.png";

export const Eletronicos = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const items = products.filter((product) =>
  product.category === "electronics"
  );

  return (
    <div>
      <Minicart />
      <Navbar />
      <Banner>
        <img className="img-banner" src={eletronicos} alt="web-banner-eletronicos" />
      </Banner>
      <div className="container-vitrine-produtos">
        <h4>Eletrônicos</h4>
        <div className="vitrine-produtos">
          {items.map((item) => (
            <Card key={item.id} data={{ product: item }} />
          ))}
        </div>
      </div>
    </div>
  );
};
