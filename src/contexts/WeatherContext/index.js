// WeatherContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WeatherContext = createContext(null);

const WeatherContextProvider = (props) => {
    const [city, setCity] = useState('Istanbul'); // Default city
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0bb65938ac5f4fb3893bd54015ad43c8`);
                setWeatherData(response.data.list);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [city]);

    return (
        <WeatherContext.Provider value={{ city, setCity, weatherData }}>
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;
