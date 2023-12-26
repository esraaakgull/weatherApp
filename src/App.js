import React, {useContext} from 'react';
import WeatherCard from "./components/WeatherCard";
import {WeatherContext} from "./contexts/WeatherContext";


const App = () => {
    const {weatherData} = useContext(WeatherContext);

    return (
        <div className="app">
            <h1>Weather Forecast</h1>
            <div className="weather-cards">
                {weatherData.map((data) => (
                    <WeatherCard
                        key={data.dt}
                        day={data.dt * 1000} // UNIX zaman damgasını milisaniyeye çeviriyoruz
                        weather={data.weather[0]}
                        temp={data.main}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
