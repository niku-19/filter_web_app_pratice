import React, { useEffect } from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { dataList } from "../../Data/Data";
import "./ListStyle.css";
import { useProduct } from "../../Context/Product";

const List = () => {
  const { dispatch, productData } = useProduct();
  useEffect(() => {
    dispatch({ type: "HANDLE_SAVE_DATA", payload: dataList });
  }, []);

  return (
    <div className="grid__container">
      {productData.updatedData ? (
        <>
          {productData.updatedData
            .filter((eachProduct) =>
              eachProduct.title
                .toLowerCase()
                .includes(productData.searchQuery.toLowerCase())
            )
            .map((eachProduct) => {
              return <ProductCard key={eachProduct.id} data={eachProduct} />;
            })}
        </>
      ) : (
        <h1> try again </h1>
      )}
    </div>
  );
};

export default List;
