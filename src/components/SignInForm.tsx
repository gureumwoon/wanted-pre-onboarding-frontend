import { styled } from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";

function SignInForm() {
    return (
        <SignInFormField>
            <Input size="medium" margin="0 0 15px" placeholder="이메일을 입력해 주세요." />
            <Input size="medium" type="password" placeholder="비밀번호를 입력해 주세요." />
            <Button size="medium" margin="30px 0 15px">SignIn</Button>
        </SignInFormField>
    )
}

const SignInFormField = styled.form`
    width: 30rem;
    padding: 3.5rem 3.5rem 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    background-color: #F7EA87;
`

export default SignInForm