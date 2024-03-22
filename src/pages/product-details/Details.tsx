import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Navbar } from "../../components/navbar/Navbar";
import { Card } from "../../components/card/Card";
import { Minicart } from "../../components/minicart/Minicart";
import { ProductDetails } from "../../components/productDetail/ProductDetail";
import { UseProducts } from "../../hook/UseProducts";

const Details = () => {
  const { productSelected, products, setProductSelected, setProducts } = useContext(AppContext);
  const quatroPrimeiros = products.slice(0, 4);

  useEffect(() => {
    const produtoVisualizado = localStorage.getItem("productSelected");
    const storedProductSelected = produtoVisualizado ? JSON.parse(produtoVisualizado) : null;
    if (storedProductSelected) {
      setProductSelected(storedProductSelected);
    }
    UseProducts().then((response) => {
      setProducts(response);
    });
  }, [setProductSelected]);


  
  return (
    <>
      <Navbar />
      <ProductDetails
        data={{
          product: {
            id: productSelected?.id || 0,
            title: productSelected?.title || "",
            image: productSelected?.image || "",
            price: productSelected?.price || 0,
            description: productSelected?.description || "",
            rating: (productSelected?.rating?.rate || 0) + (productSelected?.rating?.count || 0),
          },
        }}
      />

      <div className="container-vitrine-produtos">
        <h4>Outras pessoas também viram</h4>
        <div className="vitrine-produtos-details">
          {quatroPrimeiros.map((product) => (
            <Card key={product.id} data={{ product }} />
          ))}
        </div>
      </div>
      <Minicart />
    </>
  );
};

export default Details;
