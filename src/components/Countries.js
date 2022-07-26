import CountryDetails from "./CountryDetails";

const Countries = ({ countries }) => {
    return countries.map((country) => (
        <div key={country.name.official}>
            <CountryDetails key={country.name.official} country={country} />
        </div>
    ));
};

export default Countries;
