import React from 'react';
import '../App.css';

const News = () => {
  const newsList = [
    {
      title: 'Откриване на новия сезон',
      content: 'Хотел Парадайс открива новия сезон с уникални оферти и промоции.',
    },
    {
      title: 'Специална оферта за почивка',
      content: 'Резервирайте престой от най-малко 3 нощувки и вземете безплатен масаж в нашия спа център.',
    },
    {
      title: 'Изискано меню в ресторанта',
      content: 'Насладете се на новото изискано меню, предложено от нашия талантлив шеф-готвач.',
    },
   
  ];

  return (
    <div className="news-container">
      <h2>Новини и Събития</h2>
      <ul className="news-list">
        {newsList.map((news, index) => (
          <li key={index} className="news-item">
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;