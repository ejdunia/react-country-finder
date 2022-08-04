const Capital = ({ country }) => (
    <>
        {country.capital.map((capital) => (
            <li key={capital}>{capital}</li>
        ))}
    </>
);
export default Capital;
