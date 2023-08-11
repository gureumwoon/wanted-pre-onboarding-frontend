import { styled, css } from "styled-components"
import { InputProps, InputStyleProps } from "../types/elements/InputType";

function Input(props: InputProps) {
    const {
        label,
        type,
        size,
        placeholder,
        _onChange,
        _onKeyUp,
        margin
    } = props;

    return (
        <label>
            <LabelText >{label}</LabelText>
            <InputField
                size={size}
                type={type}
                margin={margin}
                placeholder={placeholder}
                onChange={_onChange}
                onKeyUp={_onKeyUp}
            />
        </label>
    )
}

Input.defaultProps = {
    size: 'medium',
}

const InputSize = css<InputStyleProps>`
    ${(props) =>
        props.size === 'medium' &&
        css`
      width: 100%;
      height: 2.5rem;
      font-size: 1rem;
    `}
    ${(props) =>
        props.size === 'large' &&
        css`
        width: 100%;
        height: 4.6rem;
        font-size: 2rem;
    `
    }
`

const LabelText = styled.p`
                text-align: left;
                font-size: 16px;
                line-height: 20px;
                color: #767676
                `

const InputField = styled.input<InputStyleProps>`
                ${InputSize}
                box-sizing: border-box;
                padding: 10px;
                margin: ${(props) => props.margin};
                border-radius: 5px;
                border:none;
                /* width: ${(props) => props.width || "100%"};
                height: ${(props) => props.height || "54px"}; */
                &:focus {
                    outline: none;
     }
                `

export default Input