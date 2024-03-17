import { Navbar } from "../../components/navbar/Navbar";
import { Products } from "../../components/products/Products";
import { Minicart } from "../../components/minicart/Minicart";
import { Banner } from "../../components/banner/Banner";
import homepage from "../../assets/images/web-banner/homepage.png";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <img className="img-banner" src={homepage} alt="web-banner" />
      </Banner>
      <Products />
      <Minicart />
    </>
  );
};
