import StyledInput from "./styles/StyledInput.styled";


const Filter = ({ onChange, value }) => (
    <section>
        Find Countries: <StyledInput onChange={onChange} value={value} />
    </section>
);
export default Filter;
