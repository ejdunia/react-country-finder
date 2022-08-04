import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import CountryName from "./CountryName";
import Languages from "./Languages";
import Capital from "./Capital";
import Flag from "./Flag";
import Area from "./Area";
import Card from "./styles/Card.styled";

const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const CountryDetails = ({ country }) => {
    const [isShown, setIsShown] = useState(false);
    const [weather, setWeather] = useState(null);

    const getWeather = async (country) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${api_key}&units=metric`
            );

            console.log(res.data);
            setWeather(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const showDetails = () => {
        setIsShown(!isShown);
        if (!weather) {
            getWeather(country);
        }
    };

    return (
        <Card>
            <CountryName key={country.name.common} country={country} />
            <Button text={"show"} onClick={() => showDetails()} />
            {isShown && (
                <div>
                    <h2>Capital</h2>
                    <Capital country={country} />
                    <p>
                        Latitude: {country.latlng[0]}, Longitude:{" "}
                        {country.latlng[1]}
                    </p>
                     <Area country={country} /> <Flag country={country} />
                    {/* <p></p> */}
                    <h2>Languages</h2> <Languages country={country} />
                    <h2>Weather </h2>
                    <p>Temprature: {weather?.main?.temp} Celcius</p>
                    <p>Feels: {weather?.weather[0]?.main} </p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                        alt={"weather icon"}
                    />
                    <p>wind speed {weather?.wind?.speed}m/s</p>
                </div>
            )}
        </Card>
    );
};

export default CountryDetails;
