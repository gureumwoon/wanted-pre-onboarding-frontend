import { styled } from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";

function SignUpForm() {
    return (
        <SignUpFormField>
            <Input size="medium" margin="0 0 15px" placeholder="이메일을 입력해 주세요." />
            <Input size="medium" type="password" placeholder="비밀번호를 입력해 주세요." />
            <Button size="medium" margin="30px 0 15px">SignUp</Button>
        </SignUpFormField>
    )
}

const SignUpFormField = styled.form`
    width: 30rem;
    padding: 3.5rem 3.5rem 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    background-color: #F7EA87;
`

export default SignUpForm