import Countries from "./Countries";
import FullCountryInfo from "./FullCountryInfo";
const ConditionalRender = ({ showAll }) => {
    console.log(showAll.length);
    if (showAll.length >= 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (showAll.length === 1) {
        return <FullCountryInfo countries={showAll} />;
    } else {
        return <Countries countries={showAll} />;
    }
};

export default ConditionalRender;
