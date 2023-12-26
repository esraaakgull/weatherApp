// WeatherCard.js
import React from 'react';

const WeatherCard = ({day, weather, temp}) => {
    const formatDate = (date) => {
        const options = {weekday: 'long'};
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div className="weather-card">
            <h3>{formatDate(day)}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description}/>
            <p>{weather.description}</p>
            <p>Max: {temp.max}°C</p>
            <p>Min: {temp.min}°C</p>
        </div>
    );
};

export default WeatherCard;
