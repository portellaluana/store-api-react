import { Navbar } from "../../components/navbar/Navbar";
import { NotFound } from "../../components/products/NotFound";
import { Products } from "../../components/products/Products";
import { Minicart } from "../../components/minicart/Minicart";

export const PageProductNotFound = () => {
//   const { productNotFound } = useContext(AppContext);

  return (
    <>
    <div>
      <Navbar />
      <NotFound />
      <Products />
      <Minicart />
      </div>
    </>
  );
};
