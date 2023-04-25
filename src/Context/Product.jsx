import { useContext, useState, createContext } from "react";

import { dataList } from "../Data/Data";
import { useEffect } from "react";

const ProductData = createContext(null);

const ProductDataProvider = (props) => {
  const [productdata, setProductData] = useState([]);
  const [filterData, setFilterData] = useState({
    american: false,
    chinese: false,
    italian: false,
  });

  useEffect(() => {
    setProductData((prev) => [...prev, ...dataList]);
  }, []);

  const hadleFilterInput = (e) => {
    if (e.target.value === "AMERICAN") {
      if (e.target.checked === true) {
        setFilterData((prev) => ({ ...prev, american: true }));
      } else {
        setFilterData((prev) => ({ ...prev, american: false }));
      }
    } else if (e.target.value === "CHINESE") {
      if (e.target.checked === true) {
        setFilterData((prev) => ({ ...prev, chinese: true }));
      } else {
        setFilterData((prev) => ({ ...prev, chinese: false }));
      }
    } else if (e.target.value === "ITALIAN") {
      if (e.target.checked === true) {
        setFilterData((prev) => ({ ...prev, italian: true }));
      } else {
        setFilterData((prev) => ({ ...prev, italian: false }));
      }
    }
  };

  useEffect(() => {
    if (filterData.american === true) {
      setProductData(
        productdata.filter((eachproduct) =>
          eachproduct.cuisine.includes("american")
        )
      );
    }
    if (filterData.american === true) {
      setProductData(
        productdata.filter((eachproduct) =>
          eachproduct.cuisine.includes("chinese")
        )
      );
    }
    if (filterData.american === true) {
      setProductData(
        productdata.filter((eachproduct) =>
          eachproduct.cuisine.includes("italian")
        )
      );
    }
  }, [filterData]);

  return (
    <ProductData.Provider value={{ hadleFilterInput, productdata }}>
      {props.children}
    </ProductData.Provider>
  );
};

export const useProduct = () => useContext(ProductData);

export default ProductDataProvider;
