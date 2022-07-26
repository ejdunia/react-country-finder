import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import CountryName from "./CountryName";
import Languages from "./Languages";
import Capital from "./Capital";
import Flag from "./Flag";
import Area from "./Area";
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
        <div>
            <CountryName key={country.name.common} country={country} />
            <Button text={"show"} onClick={() => showDetails()} />
            {isShown && (
                <div>
                    <h2>capital</h2>
                    <Capital country={country} />
                    <p>
                        latitude: {country.latlng[0]} longitude:
                        {country.latlng[1]}
                    </p>
                    <p>
                        Area: <Area country={country} />{" "}
                    </p>
                    <h2>languages</h2> <Languages country={country} />
                    <h2>Weather </h2>
                    <p> {weather?.main?.temp} Celcius</p>
                    <p> {weather?.weather[0]?.main} </p>
                    <p>wind speed {weather?.wind?.speed}m/s</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                        alt={"weather icon"}
                    />
                    <Flag country={country} />
                </div>
            )}
        </div>
    );
};

export default CountryDetails;
