import CountryName from "./CountryName";
import Button from "./Button";
import CountryDetails from "./CountryDetails";
import { useState } from "react";

const Countries = ({ countries }) => {
    const [isShown, setIsShown] = useState(false);
    const handleClick = (event) => {
        setIsShown((current) => !current);
    };
    return countries.map((country) => (
        <div key={country.name.official}>
            <CountryName key={country.name.official} country={country} />
            <Button text={"show"} onClick={handleClick} />
            <>{isShown && <CountryDetails country={country} />}</>
        </div>
    ));
};

export default Countries;
