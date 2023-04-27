import "./Style.css";
import { useProduct } from "../../Context/Product";
import { useEffect } from "react";
const Button = ({ Value }) => {
  const { dispatch } = useProduct();

  useEffect(() => {
    dispatch({ type: "FILTER_WITH_CATEGORY" });
    // dispatch({ type: "FILTER_WITH_START_RATING" });
  }, [Value]);

  const handleCategory = (Value) => {
    dispatch({ type: "ACTIVE_CATEGORY_BUTTON", payload: Value });
    // dispatch({ type: "ACTIVE_CATEGORY_RATING_BUTTON", payload: Value });
  };

  return (
    <button
      className={Value.active === true ? "active" : ""}
      onClick={() => handleCategory(Value)}
    >
      {Value.label}
    </button>
  );
};

export default Button;
