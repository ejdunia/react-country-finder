import CountryName from "./CountryName";

const Countries = ({ countries }) => {
    return (
        <>
            {countries.map((country) => (
                <CountryName key={country.name.common} country={country} />
            ))}
        </>
    );
};
export default Countries;
