import React from 'react'

import "./Card.css"
import RatingButton from '../RatingButton/RatingButton';

const ProductCard = ({data}) => {
  return (
    <div className="card">
      <div className="card__imgae">
        <img src={data.coverSrc} alt="" />
      </div>
      <div className="card__details">
        <div className="title_rating">
          <h2>{data.title}</h2>
          <RatingButton value={data.rating} />
        </div>
        <div className="time_price">
          <p>{data.serviceTime}</p>
          <p>{data.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
