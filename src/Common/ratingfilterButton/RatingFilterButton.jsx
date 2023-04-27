import React, { useEffect } from 'react'
import { useProduct } from '../../Context/Product';

const RatingFilterButton = ({Value}) => {
  const {dispatch} = useProduct()
  useEffect(() => {
    dispatch({ type: "FILTER_WITH_START_RATING" });
  }, [Value]);

  const handleCategory = (Value) => {
    dispatch({ type: "ACTIVE_CATEGORY_RATING_BUTTON", payload: Value });
  };
  return <button onClick={() => handleCategory(Value)}>{Value.label}</button>;
}

export default RatingFilterButton
