import {
    CheckBoxLabel,
    CheckBox,
    CheckBoxWrapper,
} from "./styles/StyledCheckbox";

const CheckboxToggle = ({ onChange }) => {
    return (
        <div>
            <CheckBoxWrapper>
                <CheckBox id="checkbox" type="checkbox" onChange={onChange} />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </div>
    );
};

export default CheckboxToggle;
