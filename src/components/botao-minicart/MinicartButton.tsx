import React, { useContext } from "react";
import iconeCarrinho from "../../assets/images/icons/cart-icon.png";
import { AppContext } from "../../context/AppContext";
import "./style.css";

interface MinicartButtonProps {}

export const MinicartButton: React.FC<MinicartButtonProps> = () => {
  const { cartItems, cartVisible, setCartVisible } = useContext(AppContext);

  const openCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <button onClick={openCart} className="icone-carrinho">
      <img src={iconeCarrinho} alt="icone-carrinho" />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
};
