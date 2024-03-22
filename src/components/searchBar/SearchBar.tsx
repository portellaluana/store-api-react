import { useContext, useState } from "react";
import { UseProducts } from "../../hook/UseProducts";
import { AppContext } from "../../context/AppContext";

export const SearchBar = () => {
  const { setProducts, setProductNotFound, setSearchItem } =
    useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const products = await UseProducts(searchValue);
    setProducts(products);
    setSearchValue("");

    const searchValueLowerCase = searchValue.toLocaleLowerCase();

    const SearchResult = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchValueLowerCase)
    );
    sessionStorage.setItem("item-procurado", searchValue);

    if (SearchResult.length === 0) {
      setProductNotFound(true);
      setSearchItem(searchValue);

      setSearchValue("");
      window.location.href = "/produto-não-encontrado";
    }
    setProducts(SearchResult);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          value={searchValue}
          placeholder="Buscar produtos"
          className="input-search"
          aria-label="Search"
          onChange={({ target }) => setSearchValue(target.value)}
          required
        />
      </form>
    </>
  );
};
