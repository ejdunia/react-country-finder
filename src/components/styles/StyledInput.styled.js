import styled from "styled-components";

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    transition: width 0.4s ease-in-out;
    &:focus {
        border: 3px solid #555;
        width: 100%;
    }
`;
export default StyledInput;
