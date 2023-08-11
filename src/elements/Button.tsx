import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "../types/elements/ButtonType";

function Button(props: ButtonProps) {
    const { children, size, _onClick, bg, margin, color } = props;
    const styles = { bg, margin, color }
    return (
        <ButtonField {...styles} size={size} onClick={_onClick}>{children}</ButtonField>
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
    background-color: ${(props) => props.bg || "cornflowerblue"};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color || "white"};
    border-radius: 5px;
    border: none;
`

export default Button