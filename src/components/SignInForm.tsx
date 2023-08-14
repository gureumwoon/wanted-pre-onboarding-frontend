import { useNavigate } from "react-router-dom"
import { styled } from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useUserForm } from "../hooks/useUserForm";
import { apis } from "../apis/api";

function SignInForm() {
    const navigate = useNavigate()
    const { userData, handleEmailChange, handlePasswordChange } = useUserForm({
        email: '',
        password: ''
    })

    const handleCheckBtn = () => {
        let offButton = false
        if (userData.email === "" || userData.password === "") {
            offButton = true;
        } else {
            offButton = false;
        }
        return offButton;
    }

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        apis.signIn(userData)
            .then((res) => {
                localStorage.setItem("access_token", res.data.access_token);
                window.alert("환영합니다.")
                navigate("/todo")
            }).catch((error) => {
                window.alert("이메일/비밀번호를 확인해 주세요.")
                console.log(error);
            })

    }

    return (
        <SignInFormField onSubmit={handleSignIn}>
            <Input
                dataTestId="email-input"
                name="email"
                size="medium"
                margin="0 0 15px"
                placeholder="이메일을 입력해 주세요."
                _onChange={handleEmailChange}
            />
            <Input
                dataTestId="password-input"
                name="password"
                size="medium"
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                _onChange={handlePasswordChange}
            />
            <Button
                dataTestId="signin-button"
                size="medium"
                margin="30px 0 15px"
                _disabled={handleCheckBtn()}
            >
                SignIn
            </Button>
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