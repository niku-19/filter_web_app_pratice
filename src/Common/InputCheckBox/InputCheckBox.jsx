import "./checkbox.css"
import { useProduct } from "../../Context/Product";
const InputCheckBox = (props) => {
  const { dispatch } = useProduct();

  const handleInputCheckBox = (checkbox) => {
    dispatch({type:'HANDLE_CHECKED_CHECKBOX' , payload : checkbox})
    dispatch({
      type: "HANDLE_FILTER_WITH_CUISINE_DATA"});
  }

  

  return (
    <div className="cuisine__checkbox__filter__container">
      <label>{props.Data.label}</label>
      <input
        value={props.Data.label}
        onChange={() => handleInputCheckBox(props.Data)}
        type="checkbox"
      />
    </div>
  );
};

export default InputCheckBox;
