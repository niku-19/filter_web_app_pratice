import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Styles.css";
import { useProduct } from "../../Context/Product";
const Search = () => {
  const { dispatch, productData } = useProduct();
  return (
    <div className="container">
      <div className="search__container">
        <BiSearchAlt className="search__icon" />
        <input
          type="text"
          placeholder="Woodland Hills"
          value={productData.searchQuery || ""}
          onChange={(e) =>
            dispatch({ type: "HANDLE_SEARCH_FILTER", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Search;
