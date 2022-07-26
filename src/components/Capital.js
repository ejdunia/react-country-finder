const Capital = ({ country }) => (
    <ul>
        {country.capital.map((capital) => (
            <li key={capital}>{capital}</li>
        ))}
    </ul>
);
export default Capital;
