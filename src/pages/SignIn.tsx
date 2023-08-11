import { styled } from "styled-components";
import SignInForm from "../components/SignInForm";

function SignIn() {
    return (
        <SignInSection>
            <PageText>Sign In</PageText>
            <SignInForm />
        </SignInSection>
    )
}

const SignInSection = styled.div`
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


export default SignIn