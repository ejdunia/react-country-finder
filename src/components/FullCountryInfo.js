import CountryName from "./CountryName";
import Languages from "./Languages";
import Capital from "./Capital";
import Flag from "./Flag";
import Area from "./Area";
const FullCountryInfo = ({ countries }) => {
    return countries.map((country) => (
        <>
            <CountryName key={country.name.common} country={country} />
            <h2>capital</h2>
            <Capital country={country} />
            <p>
                Area: <Area country={country} />{" "}
            </p>
            <h2>languages</h2> <Languages country={country} />
            <Flag country={country} />
        </>
    ));
};

export default FullCountryInfo;
