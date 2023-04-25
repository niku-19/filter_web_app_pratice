import React from "react";
import "./checkbox.css"
import { useProduct } from "../../Context/Product";
const InputCheckBox = ({name}) => {
  const {hadleFilterInput} = useProduct()
  return (
    <div className="cuisine__checkbox__filter__container">
      <label>{name}</label>
      <input value={name} onChange={(e) => hadleFilterInput(e)} type="checkbox" />
    </div>
  );
};

export default InputCheckBox;
