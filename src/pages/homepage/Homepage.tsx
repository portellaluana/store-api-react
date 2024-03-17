import { Navbar } from "../../components/navbar/Navbar";
import { Products } from "../../components/products/Products";
import { Minicart } from "../../components/minicart/Minicart";
import { Slider } from "../../components/slider/Slider";



export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <Products />
      <Minicart />
    </>
  );
};
