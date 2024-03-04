import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Offers = () => {
  const offersAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 2000,
  });

  return (
    <animated.div style={offersAnimation} className="offers">
      <h2>Текущи Оферти и Промоции</h2>
      <div className="offer-list">
        <div className="offer">
          <h3>Лятна Ваканция</h3>
          <p>Резервирайте сега и получете специална отстъпка за лятна ваканция. Валидно до 31 август.</p>
        </div>
        <div className="offer">
          <h3>Романтичен Уикенд</h3>
          <p>Изненадайте любимия човек с романтичен уикенд в Хотел Парадайс. Валидно през цялата година.</p>
        </div>
        {/* Добавете още оферти по ваш избор */}
      </div>
    </animated.div>
  );
}

export default Offers;