const Filter = ({ onChange, value }) => (
    <section>
        Find Countries: <input onChange={onChange} value={value} />
    </section>
);
export default Filter;
