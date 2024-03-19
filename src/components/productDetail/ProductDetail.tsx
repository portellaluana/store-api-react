import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";
import StarRating from "../rating/StarRating";
import "./style.css";

interface ProductDetailsProps {
  data: {
    product: {
      id: number;
      title: string;
      image: string;
      price: number;
      description: string;
      rating?: {
        rate: number; 
        count: number;
      };
      quantidade: number;
    };
  };
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const { productSelected, cartItems, setCartItems } = useContext(AppContext);

  if (!productSelected) {
    return null; 
  }

  const { id, title, image, price, description, rating, quantidade } = productSelected;

  const handleAddToCart = () => {
    const itemIndex = cartItems.findIndex((product) => product.id === id);
  
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantidade = (updatedItems[itemIndex].quantidade || 0) + 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...data.product, quantidade: 1 }]);
    }
  };
  

  useEffect(() => {
    if (!productSelected) return; 

    const productData = { id, title, image, price, description, rating, quantidade };

    localStorage.setItem("productSelected", JSON.stringify(productData));
    localStorage.setItem("productsList", JSON.stringify(cartItems));
  }, [cartItems, productSelected]);

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-image-container"><img className="details-image" src={image} alt=""/></div>
        <div className="details-text">
          <StarRating rating={rating} /> 
          <h1>{title}</h1>
          <p className="details-description">{description}</p>
          <strong className="price">{formatCurrrency(price, 'BRL')}</strong>
          <button className="button-primary" onClick={handleAddToCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};
