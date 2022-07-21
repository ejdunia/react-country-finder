import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setNewFilter] = useState("");
    const [showAll, setShowAll] = useState(countries);

    const handleFilterChange = (value) => {
        setNewFilter(value);
        const filteredCountries = countries.filter((country) =>
            country?.name?.common.toLowerCase().includes(value.toLowerCase())
        );
        setShowAll(filteredCountries);
    };

    const getCountries = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(res.data);
            setShowAll(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getCountries();
    }, []);

    return (
        <div>
            <Filter onChange={(e) => handleFilterChange(e.target.value)} value={filter} />{" "}
            <p>country list</p>
            <Countries countries={showAll} />
        </div>
    );
}

export default App;
