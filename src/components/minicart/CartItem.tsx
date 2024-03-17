import React, { useContext } from "react";
import iconeLixeira from "../../assets/images/icons/trash-icon.png";
import { AppContext } from "../../context/AppContext";
import "./style.css";

interface CartItemProps {
  data: {
    product: {
      id: number;
      title: string;
      image: string;
      price: number;
      description: string;
      quantidade: number;
    };
  };
}

export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  
  const { id, title, image, price, description, quantidade } = data.product;

  const updateItems = cartItems.filter((item) => item.id !== id);

  const handleRemoveItem = () => {
    setCartItems(updateItems);
  };

  const handleDecrement = () => {
    if (data.product.quantidade === 1) {
      setCartItems(updateItems);
    } else {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          item.quantidade = (item.quantidade || 0) - 1;
        }
        return item;
      });

      setCartItems(updatedItems);
    }
  };

  const handleIncrement = () => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        item.quantidade = (item.quantidade || 0) + 1;
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  return (
    <>
      <li className="list-item">
        <img src={image} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          <p className="product-description">{description}</p>

          <p className="product-price">R$ {price}</p>
          <div className="quantity-container">
            <button
              className="minus"
              onClick={handleDecrement}
            >
              -
            </button>

            <p className="quantity-item">{quantidade}</p>

            <button
              className="plus"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
        <button type="button" className="remove-item">
          <img onClick={handleRemoveItem} src={iconeLixeira} alt="Remover" />
        </button>
      </li>
    </>
  );
};
