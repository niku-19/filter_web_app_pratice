import { useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import "./filter.css";
import { ratingList, dataList } from "../../Data/Data";
import InputCheckBox from "../../Common/InputCheckBox/InputCheckBox";
import { useProduct } from "../../Context/Product";
import RatingButton from "../../Common/RatingButton/RatingButton";
import RatingFilterButton from "../../Common/ratingfilterButton/RatingFilterButton";
const Filter = () => {
  const [price, setPrice] = useState();

  const { productData, dispatch } = useProduct();

  const { min, max } = dataList.reduce(
    (acc, cur) => {
      if (cur.price > acc.max) {
        return { ...acc, max: cur.price + 3000 };
      } else if (acc.min > cur.price) {
        return { ...acc, min: cur.price };
      } else {
        return { ...acc };
      }
    },
    { min: +Infinity, max: -Infinity }
  );

  useEffect(() => {
    setPrice(min);
  }, []);

  const handlePrice = (e) => {
    setPrice(e.target.value);
    dispatch({
      type: "HANDLE_PRICE_FILTER",
      payload: { minPrice: min, currentPrice: e.target.value },
    });
  };

  return (
    <div className="container">
      <h1>Category</h1>
      <div className="category__button">
        {productData.filterWithCategory.map((eachCategory, INDEX) => {
          return <Button key={INDEX} Value={eachCategory} />;
        })}
      </div>
      <h1>Cuisine</h1>
      <div className="cuisine__container">
        {productData.checkboxList.map((eachCheckbox) => {
          return <InputCheckBox key={eachCheckbox.cId} Data={eachCheckbox} />;
        })}
      </div>

      <h1>Price Slider</h1>
      <div className="price__scroll">
        <input
          type="range"
          min={min}
          max={max}
          value={price}
          onChange={(e) => handlePrice(e)}
        />
      </div>
      <div className="selected__price">
        <p>{min}</p>
        <p>{max}</p>
      </div>
      <div className="selected__price">
        <p>Price</p>
        <p>$ {price}</p>
      </div>
      <h1>Star Ranting</h1>
      <div className="rating__button">
        {productData.filterWithRatingList.map((eachCategory, INDEX) => {
          return <RatingFilterButton key={INDEX} Value={eachCategory} />;
        })}
      </div>
    </div>
  );
};

export default Filter;
