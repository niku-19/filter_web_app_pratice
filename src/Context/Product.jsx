import { useContext, createContext, useReducer } from "react";
import { INITIAL_STATE, reducerFunc } from "../Reducer/ProductReducer";

const ProductData = createContext(null);

const ProductDataProvider = ({ children }) => {
  const [productData, dispatch] = useReducer(reducerFunc, INITIAL_STATE);

  return (
    <ProductData.Provider value={{ dispatch, productData }}>
      {children}
    </ProductData.Provider>
  );
};

const useProduct = () => useContext(ProductData);
export { useProduct };

export default ProductDataProvider;
