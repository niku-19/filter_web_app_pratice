import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import { dataList } from "../../Data/Data"
import "./ListStyle.css"
import { useProduct } from "../../Context/Product";
const List = () => {
  const { productdata } = useProduct();
  return (
    <div className="grid__container">
      {productdata.map((eachProduct) => {
        return <ProductCard key={eachProduct.id} data={eachProduct} />;
      })}
    </div>
  );
};

export default List;
