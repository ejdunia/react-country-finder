import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ConditionalRender from "./components/ConditionalRender";

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("");
    const [showAll, setShowAll] = useState(countries);

    const handleFilterChange = (value) => {
        setFilter(value);
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
            <Filter
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filter}
            />{" "}
            <h2>country list</h2>
            <ConditionalRender showAll={showAll} />
        </div>
    );
}

export default App;
