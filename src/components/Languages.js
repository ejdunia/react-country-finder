const Languages = ({ country }) => {
    const languages = Object.values(country?.languages);
    return languages.map((language) => <li key={language}>{language}</li>);
};

export default Languages;
