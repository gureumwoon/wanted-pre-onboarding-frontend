import { styled } from "styled-components";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
    return (
        <SignUpSection>
            <PageText>Sign Up</PageText>
            <SignUpForm />
        </SignUpSection>
    )
}

const SignUpSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:cornflowerblue;
`

const PageText = styled.h1`
    color:#F7EA87;
    font-size: 4rem;
    position: absolute;
    top: 15%;
`


export default SignUp