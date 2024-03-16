import iconeSearch from "../../assets/images/icons/search-icon.png";
import { useContext, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import { AppContext } from "../../context/AppContext";

export const SearchBar = () => {
  const { setProducts, setProductNotFound,  setSarchItem } =
    useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

   const handleSearch = async (e) => {
    e.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue("");

    const searchValueLowerCase = searchValue.toLocaleLowerCase();

    const SearchResult = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchValueLowerCase)
    );

    if (SearchResult.length === 0) {
      setProductNotFound(true);
      setSarchItem(searchValue);
      setSearchValue("");
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
