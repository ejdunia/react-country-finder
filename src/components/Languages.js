const Languages = ({ country }) => {
    const languages = Object.values(country?.languages);
    console.log(languages);
    return languages.map((language) => <li>{language}</li>);
};

export default Languages;
