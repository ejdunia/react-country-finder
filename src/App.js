import axios from "axios";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { GlobalStyles } from "./components/global";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import ConditionalRender from "./components/ConditionalRender";
import CheckboxToggle from "./components/CheckboxToggle";
// const api_key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

function App() {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("");
    const [showAll, setShowAll] = useState(countries);
    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!isDarkMode);
    };

    const handleFilterChange = (value) => {
        setFilter(value);
        const filteredCountries = countries.filter((country) =>
            country?.name?.common.toLowerCase().includes(value.toLowerCase())
        );
        setShowAll(filteredCountries);
    };

    const getCountries = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/all`);
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
        <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Navbar>navbar</Navbar>
            <CheckboxToggle onChange={() => handleToggle()} />
            <Filter
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filter}
            />{" "}
            <ConditionalRender showAll={showAll} />
        </ThemeProvider>
    );
}

export default App;
