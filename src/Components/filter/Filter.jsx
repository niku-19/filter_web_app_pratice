import React, { useEffect, useState } from "react";
import Button from "../../Common/Button/Button";
import "./filter.css";
import { categoryList, ratingList, dataList } from "../../Data/Data";
import InputCheckBox from "../../Common/InputCheckBox/InputCheckBox";
const Filter = () => {
  const [price, setPrice] = useState();

  const { min, max } = dataList.reduce(
    (acc, cur) => {
      if (cur.price > acc.max) {
        return { ...acc, max: cur.price };
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
  };

  return (
    <div className="container">
      <h1>Category</h1>
      <div className="category__button">
        {categoryList.map((eachCategory, INDEX) => {
          return <Button key={INDEX} value={eachCategory} />;
        })}
      </div>
      <h1>Cuisine</h1>
      <div className="cuisine__container">
        <InputCheckBox name="AMERICAN" />
        <InputCheckBox name="CHINESE" />
        <InputCheckBox name="ITALIAN" />
      </div>
      <h1>Star Ranting</h1>
      <div className="rating__button">
        {ratingList.map((eachCategory, INDEX) => {
          return <Button key={INDEX} value={eachCategory} />;
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
    </div>
  );
};

export default Filter;
