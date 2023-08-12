import { useNavigate } from "react-router-dom"
import { styled } from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { useUserForm } from "../hooks/useUserForm";
import { apis } from "../apis/api";

function SignUpForm() {
    const navigate = useNavigate();
    const { userData, handleEmailChange, isEmail, handlePasswordChange, isPassword } = useUserForm({
        email: '',
        password: '',
    });

    const handleCheckBtn = () => {
        let offButton = false
        if (isEmail === false && isPassword === false) {
            offButton = true;
        } else if (userData.email === "" || userData.password === "") {
            offButton = true;
        } else if (isEmail === true && isPassword === true) {
            offButton = false;
        }
        return offButton;
    }


    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(isEmail, isPassword)
        if (isEmail === false || isPassword === false) {
            window.alert("이메일/비밀번호 형식에 맞게 입력해 주세요.")
        }
        apis.signUp(userData)
            .then(() => {
                window.alert("회원가입 성공");
                navigate("/signin")
            }).catch((error) => {
                if (error.response.status === 400) {
                    window.alert("동일한 이메일이 존재합니다.")
                }
                console.log(error);
            })
    }


    return (
        <SignUpFormField onSubmit={handleSignUp}>
            <Input
                dataTestId="email-input"
                name="email"
                value={userData.email}
                size="medium"
                type="text"
                margin="0 0 15px"
                placeholder="이메일을 입력해 주세요."
                _onChange={handleEmailChange}
            />
            <Input
                dataTestId="password-input"
                name="password"
                value={userData.password}
                size="medium"
                type="password"
                placeholder="비밀번호를 8자 이상 입력해 주세요."
                _onChange={handlePasswordChange}
            />
            <Button
                dataTestId="signup-button"
                size="medium"
                margin="30px 0 15px"
                _disabled={handleCheckBtn()}
            >
                SignUp
            </Button>
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