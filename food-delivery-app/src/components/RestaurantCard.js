import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img 
        src={process.env.PUBLIC_URL + restaurant.image} 
        alt={restaurant.name}
        className="food-image"
      />
      <div className="card-details">
        <div className="name-rating">
          <h3>{restaurant.name}</h3>
          <span>⭐ {restaurant.rating}</span>
        </div>
        <p className="delivery-time">{restaurant.deliveryTime} mins</p>
        <div className="price-add">
          <p className="price">₹{restaurant.price}</p>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;