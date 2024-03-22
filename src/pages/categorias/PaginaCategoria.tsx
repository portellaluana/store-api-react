import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { UseProducts } from "../../hook/UseProducts";
import { Minicart } from "../../components/minicart/Minicart";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/card/Card";
import { Banner } from "../../components/banner/Banner";
import { caminhoImgCategoria } from "../../utils/caminhoImgCategoria";


export const PaginaCategoria = () => {
  const { categoria } = useParams();
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    UseProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  const items = products.filter((product) => product.category === categoria);
console.log(categoria)
  return (
    <div>
      <Minicart />
      <Navbar />
      <Banner>
        <img className="img-banner" src={caminhoImgCategoria(categoria)} alt="web-banner" />
      </Banner>
      <div className="container-vitrine-produtos">
        <h4>{categoria}</h4>
        <div className="vitrine-produtos">
          {items.map((item) => (
            <Card key={item.id} data={{ product: item }} />
          ))}
        </div>
      </div>
    </div>
  );
};
