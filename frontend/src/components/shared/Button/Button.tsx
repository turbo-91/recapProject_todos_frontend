import {StyledButton} from "./Button.styles.tsx";

interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

function Button(props: Readonly<ButtonProps>) {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled}>
            {props.label}
        </StyledButton>
    );
}

export default Button;