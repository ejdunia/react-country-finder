import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #ea4c89;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    outline: none;
    padding: 8px 10px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover,
    &:focus {
        background-color: #f082ac;
    }
`;

export default StyledButton;
