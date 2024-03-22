import electronics from "../assets/images/web-banner/electronics.png";
import jewelery from "../assets/images/web-banner/jewelery.png";
import mensclothing from "../assets/images/web-banner/mensclothing.png";
import womensclothing from "../assets/images/web-banner/womensclothing.png";
import homepage from "../assets/images/web-banner/homepage.png";

export const caminhoImgCategoria = (categoria) => {
  switch (categoria) {
    case "electronics":
      return electronics;
    case "jewelery":
      return jewelery;
    case "men's clothing":
      return mensclothing;
    case "women's clothing":
      return womensclothing;
    default:
      return homepage;
  }
};
