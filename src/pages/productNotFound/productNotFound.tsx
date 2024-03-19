import { Navbar } from "../../components/navbar/Navbar";
import { NotFound } from "../../components/products-list/NotFound";
import { ProductsList } from "../../components/products-list/ProductsList";
import { Minicart } from "../../components/minicart/Minicart";

export const PageProductNotFound = () => {
//   const { productNotFound } = useContext(AppContext);

  return (
    <>
    <div>
      <Navbar />
      <NotFound />
      <ProductsList />
      <Minicart />
      </div>
    </>
  );
};
