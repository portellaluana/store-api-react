import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const StarRating = () => {
  const { productSelected } = useContext(AppContext);

  const valorRateArredondado = productSelected && productSelected.rating && typeof productSelected.rating.rate === 'number'
    ? Math.round(productSelected.rating.rate)
    : 0;

  const avaliacoes = productSelected && productSelected.rating ? productSelected.rating.count : 0;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < valorRateArredondado) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return (
    <div>
      {stars} <p>{avaliacoes} avaliações</p>
    </div>
  );
}

export default StarRating;
