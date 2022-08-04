import styled from "styled-components";

const Card = styled.div`
    max-width: 400px;
    height: auto;
    border: 1px solid seashell;
    padding: 10px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & li {
        list-style: none;
        display: flex;
    }

    & * {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default Card;
