import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "../types/elements/ButtonType";

function Button(props: ButtonProps) {
    const { dataTestId, children, size, _onClick, _disabled, bg, margin, color } = props;
    const styles = { bg, margin, color }
    return (
        <ButtonField
            {...styles}
            data-testid={dataTestId}
            type="submit"
            size={size}
            onClick={_onClick}
            disabled={_disabled}
        >
            {children}
        </ButtonField>
    )
}

Button.defaultProps = {
    size: "medium",
    backgroundColor: "cornflowerblue",
};

const ButtonSizeStyle = css<ButtonStyleProps>`
    ${(props) =>
        props.size === 'medium' &&
        css`
        width: 7.5rem;
        height: 2.5rem;
        font-size: 1rem;
    `
    }
    ${(props) =>
        props.size === 'large' &&
        css`
        width: 15rem;
        height: 5rem;
        font-size: 2rem;
    `
    }
`

const ButtonField = styled.button<ButtonStyleProps>`
    ${ButtonSizeStyle}
    cursor: pointer;
    background-color: ${(props) => props.disabled ? "#c4c4c4" : "cornflowerblue"};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color || "white"};
    border-radius: 5px;
    border: none;
`

export default Button