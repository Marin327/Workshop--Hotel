import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import HotelServices from '../HotelServices/HotelServices';

import '../App.css';

const Header = () => {
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const [showJobApplication, setShowJobApplication] = useState(false);
  const [showHotelServices, setShowHotelServices] = useState(false);

  const toggleJobApplication = () => {
    setShowJobApplication(!showJobApplication);
    if (showHotelServices) {
      setShowHotelServices(false);
    }
  };

  const toggleHotelServices = () => {
    setShowHotelServices(!showHotelServices);
    if (showJobApplication) {
      setShowJobApplication(false);
    }
  };

  const [applicationFormData, setApplicationFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setApplicationFormData((prevData) => ({ ...prevData, resume: file }));
  };

  const submitApplication = (e) => {
    e.preventDefault();
    console.log('Application submitted:', applicationFormData);
    setApplicationFormData({
      name: '',
      email: '',
      position: '',
      resume: null,
    });
    setShowJobApplication(false);
  };

  return (
    <animated.header style={headerAnimation} className="header">
      <div className="logo">Спа Хотел Парадайс: Стилен Хотел в село Баня</div>
      <nav className="navigation">
        <a href="/">Начало</a>
        <a href="/rooms">Стаи</a>
        <a href="/reservation">Резервация</a>
        <a href="/gallery">Галерия и Новини</a>
        <a href="/contact">Контакт</a>
        <button onClick={toggleJobApplication}>Кандидатствай</button>
        <button onClick={toggleHotelServices}>Услуги</button>
      </nav>
      {showJobApplication && (
        <div className="job-application-form">
          <h3>Кандидатствай за Свободни Позиции</h3>
          <form onSubmit={submitApplication}>
            <div className="form-group">
              <label>Име:</label>
              <input type="text" name="name" value={applicationFormData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Имейл:</label>
              <input type="email" name="email" value={applicationFormData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Позиция, за която кандидатствате:</label>
              <input type="text" name="position" value={applicationFormData.position} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Прикачете своето CV (PDF, Word):</label>
              <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
            </div>
            <button type="submit">Изпрати Кандидатстване</button>
          </form>
        </div>
      )}
      {showHotelServices && <HotelServices />}
    </animated.header>
  );
}

export default Header;