import React, { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

interface ProviderValue {
  products: string[]; 
  setProducts: React.Dispatch<React.SetStateAction<string[]>>;
  cartItems: string[]; 
  setCartItems: React.Dispatch<React.SetStateAction<string[]>>;
  cartVisible: boolean;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  productNotFound: boolean;
  setProductNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  searchItem: string;
  setSarchItem: React.Dispatch<React.SetStateAction<string>>;
  productSelected: string; 
  setProductSelected: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<string[]>([]); 
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);
  const [searchItem, setSarchItem] = useState("");
  const [productSelected, setProductSelected] = useState("");
  const [error, setError] = useState(true);


  const value: ProviderValue = {
    products,
    setProducts,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible,
    productNotFound,
    setProductNotFound,
    searchItem,
    setSarchItem,
    productSelected,
    setProductSelected,
    error, setError
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};