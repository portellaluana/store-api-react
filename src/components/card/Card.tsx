import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { formatCurrrency } from "../../utils/formatCurrency";
import { Link } from "react-router-dom";

interface CardProps {
  data: {
    product: {
      id: number;
      title: string;
      image: string;
      price: number;
      description: string;
      rating: {
        rate?: number; 
        count?: number;
      };
      quantidade: number;
    };
  };
}
export const Card: React.FC<CardProps> = ({ data }) => {
  const { id, title, image, price, description, quantidade } = data.product;
  const { cartItems, setCartItems, productSelected, setProductSelected } = useContext(AppContext);

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
      setCartItems([...cartItems, data.product]);
    }
  };
  
function produtoSelecionado(){
  setProductSelected(data.product)
  window.scrollTo(0, 0);
}

useEffect(() => {
    localStorage.setItem("productsList", JSON.stringify(cartItems));
  }, [cartItems, productSelected]);

  return (
    <>
    <li className="card-container">
      <div className="card-content" >
    <Link to={`/details`} onClick={produtoSelecionado} >
        <div className="image-content" >
          <img src={image} className="product-image" alt="imageProduct" />
        </div>
        <h5>{title}</h5>
        <p className="description">{description}</p>
        <strong className="price">{formatCurrrency(price, "BRL")}</strong>
    </Link>

        <button className="button-primary" onClick={handleAddToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </li>
    </>
  );
};
