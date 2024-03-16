import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";
import StarRating from "../rating/StarRating";

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
    const item = cartItems.find((product) => product.id === id);
    
    if (item) {
      const updateItems = cartItems.map((product) => {
        if (product.id === id) {
          product.quantidade = (product.quantidade || 0) + 1;
        }
        return product;
      });
      setCartItems(updateItems);
    } else {
      setCartItems([...cartItems, productSelected]);
    }
  };

  useEffect(() => {
    if (!productSelected) return; 

    const productData = { id, title, image, price, description, rating };

    localStorage.setItem("productSelected", JSON.stringify(productData));
    localStorage.setItem("productsList", JSON.stringify(cartItems));
  }, [cartItems, productSelected]);

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-image-container"><img className="details-image" src={image} alt=""/></div>
        <div className="details-text">
          <StarRating rating={rating} /> {/* Passando a prop rating para o componente StarRating */}
          <h1>{title}</h1>
          <p className="details-description">{description}</p>
          <strong className="price">R$ {formatCurrrency(price, 'BRL')}</strong>
          <button className="button-primary" onClick={handleAddToCart}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
};
