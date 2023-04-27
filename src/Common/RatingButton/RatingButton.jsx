import React from "react";
import { useProduct } from "../../Context/Product";

const RatingButton = ({ value }) => {
  const {disptach} = useProduct()
  return <button>{value}🌟</button>;
};

export default RatingButton;
