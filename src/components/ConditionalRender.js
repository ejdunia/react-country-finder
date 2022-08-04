import Countries from "./Countries";
import FullCountryInfo from "./FullCountryInfo";

const ConditionalRender = ({ showAll }) => {
    console.log(showAll.length);
    if (showAll.length >= 10) {
        return <p>Search for any Country</p>;
    } else if (showAll.length === 1) {
        return <FullCountryInfo countries={showAll} />;
    } else {
        return <Countries countries={showAll} />;
    }
};

export default ConditionalRender;
