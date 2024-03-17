import { Card } from "../../components/card/Card";
import { useContext, useEffect } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";
import { Navbar } from "../../components/navbar/Navbar";
import { Banner } from "../../components/banner/Banner";
import { Minicart } from "../../components/minicart/Minicart";
import joias from "../../assets/images/web-banner/joias.png";

export const Joalheria = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const items = products.filter((product) =>
  product.category === "jewelery"
  );

  return (
    <div>
      <Minicart />
      <Navbar />
      <Banner>
        <img className="img-banner" src={joias} alt="web-banner-joias" />
      </Banner>
      <div className="container-vitrine-produtos">
        <h4>Joalheria</h4>
        <div className="vitrine-produtos">
          {items.map((item) => (
            <Card key={item.id} data={{ product: item }} />
          ))}
        </div>
      </div>
    </div>
  );
};
