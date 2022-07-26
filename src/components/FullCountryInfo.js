import CountryDetails from "./CountryDetails";
const FullCountryInfo = ({ countries }) => {
    return countries.map((country) => (
        <CountryDetails key={country.name.official} country={country} />
    ));
};

export default FullCountryInfo;
