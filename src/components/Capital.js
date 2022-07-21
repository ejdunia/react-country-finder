const Capital = ({ country }) => (
    <ul>
        {country.capital.map((capital) => (
            <li>{capital}</li>
        ))}
    </ul>
);
export default Capital;
