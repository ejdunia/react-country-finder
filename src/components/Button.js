import StyledButton from "./styles/StyledButton.styled";

const Button = ({ text, onClick }) => {
    return <StyledButton onClick={onClick}> {text}</StyledButton>;
};

export default Button;
