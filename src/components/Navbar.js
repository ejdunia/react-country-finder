import styled from "styled-components";
const Nav = styled.div`
    height: 30px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    box-sizing: border-box;
    background-color: #101721;
    /* text-align: center; */
    justify-items: center;
    align-items: center;
`;

const Navbar = () => {
    return <Nav>Country Finder</Nav>;
};

export default Navbar;
