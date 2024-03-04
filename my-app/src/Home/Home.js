import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Offers from '../Offers/Offers';
import '../App.css';

const Home = () => {
  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  // Създайте стейт за видимостта на офертите
  const [showOffers, setShowOffers] = useState(false);

  // Функция за превключване на видимостта на офертите
  const toggleOffers = () => {
    setShowOffers(!showOffers);
  };

  return (
    <animated.div style={homeAnimation} className="home">
      <div className="stars-container">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
      <h1>Добре дошли в Хотел Парадайс</h1>
      <p>Преживейте лукс и комфорт в сърцето в село Баня</p>
      <button onClick={toggleOffers}>Вижте текущите оферти</button>
      {showOffers && <Offers />} {/* Показва офертите, ако showOffers е true */}
    </animated.div>
  );
}

export default Home;