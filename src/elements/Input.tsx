import { styled, css } from "styled-components"
import { InputProps, InputStyleProps } from "../types/elements/InputType";

function Input(props: InputProps) {
    const {
        className,
        label,
        dataTestId,
        name,
        value,
        type,
        size,
        placeholder,
        _onChange,
        _onKeyUp,
        margin
    } = props;

    return (
        <Label className={className}>
            <LabelText >{label}</LabelText>
            <InputField
                data-testid={dataTestId}
                margin={margin}
                name={name}
                value={value}
                size={size}
                type={type}
                placeholder={placeholder}
                onChange={_onChange}
                onKeyUp={_onKeyUp}
            />
        </Label>
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
        height: 2.75rem;
        font-size: 1rem;
    `
    }
`

const Label = styled.label<InputStyleProps>`
    width: 100%;
`

const LabelText = styled.span`
                text-align: left;
                font-size: 1.5rem;
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