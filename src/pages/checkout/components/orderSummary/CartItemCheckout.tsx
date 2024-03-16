export const CartItemCheckout = ({ data }) => {
  const { title, image, price, description, quantidade } = data.product;


  return (
    <>
      <li className="list-item">
        <img src={image} alt="imagem-produto" className="product-image" />

        <div className="list-item-info">
          <p className="product-name">{title}</p>
          <p className="product-description">{description}</p>
          <p className="quantity-item quantity-item-checkout">{quantidade}{quantidade > 1 ? ' unidades' : ' unidade' }</p>
        </div>
        <p className="product-price">R$ {price}</p>
      </li>
    </>
  );
};
