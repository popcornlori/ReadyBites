import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import './Home.css';

const Home = () => {
  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      image: "/images/burger.jpg",
      rating: 4.5,
      deliveryTime: 30,
      price: 120
    },
    {
      id: 2,
      name: "Pizza Heaven", 
      image: "/images/pizza.jpg",
      rating: 4.7,
      deliveryTime: 25,
      price: 250
    }
  ];

  return (
    <div className="home-page">
      <h1>Food Delivery App</h1>
      <div className="restaurants-grid">
        {restaurants.map(restaurant => (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;