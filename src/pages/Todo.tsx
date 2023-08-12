import { styled } from "styled-components";
import TodoForm from "../components/TodoForm";

function Todo() {
    return (
        <TodoSection>
            <PageText>To Do List!!</PageText>
            <TodoForm />
        </TodoSection>
    )
}

const TodoSection = styled.div`
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
    top: 10%;
`



export default Todo