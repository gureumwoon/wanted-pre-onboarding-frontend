import { styled } from "styled-components";
import { useNavigate } from "react-router-dom"
import Button from "../elements/Button";

function Home() {
    const navigate = useNavigate()
    return (
        <Main>
            <SignUp>
                <p>회원이 아니신가요?</p>
                <Button size="large" _onClick={() => navigate("/signup")}>회원가입</Button>
            </SignUp>
            <User>
                <p>회원이신가요?</p>
                <div>
                    <Button size="large" _onClick={() => navigate("/signin")}>로그인</Button>
                    <Button size="large" _onClick={() => navigate("/todo")}>TodoList</Button>
                </div>
            </User>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: cornflowerblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`
const SignUp = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 10px;
    p {
        font-size: 2rem;
        margin-right: 80px;
        min-width: 300px;
    }
    button {
        min-width: 240px;
        background-color: #F7EA87;
        color: #000;
    }
`

const User = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: 10px;
    p{
        font-size: 2rem;
        margin-right: 80px;
        min-width: 300px;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    button {
        background-color: #F7EA87;
        color: #000
    }
    button:first-child {
        margin-right: 20px;
    }
    }
`

export default Home