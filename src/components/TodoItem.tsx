import { styled } from "styled-components";
import { useState } from "react"
import Button from "../elements/Button";
import Input from "../elements/Input";
import { TodoList } from "../types/TodoType";

function TodoItem({ todo }: TodoList) {
    const [isModifyVer, setIsModifyVer] = useState(false);


    const handleModifyTodo = () => {
        setIsModifyVer(true)
    }
    return (
        <>
            {
                !isModifyVer ?
                    <List>
                        <Input label={`${todo}`} type="checkbox" />
                        <Button dataTestId="modify-button" margin="0 8px 0 0" _onClick={handleModifyTodo}>수정</Button>
                        <Button dataTestId="delete-button" >삭제</Button>
                    </List> :
                    <ModifyList>
                        <ModiInput>
                            <Input type="checkbox" className="checkbox-label" />
                            <Input dataTestId="modify-input" type="text" size="medium" className="modiInput-label" />
                        </ModiInput>
                        <Button dataTestId="modify-button" margin="0 8px 0 0" _onClick={handleModifyTodo}>제출</Button>
                        <Button dataTestId="cancel-button" >취소</Button>
                    </ModifyList>
            }
        </>
    )
}

const List = styled.li`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 13px;
    label {
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    background-color: cornflowerblue;
    border-radius: 5px;
    padding: 6px 0;
    box-sizing: border-box;
    margin-right: 20px;
    span {
    color: white;
    display: inline-block;
    width: 80%;
    }
    input {
        width: 20%;
        height: 1.5rem;
    }
    }
`

const ModifyList = styled.li`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 0 13px 0;
    width: 100%;
`

const ModiInput = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: cornflowerblue;
    border-radius: 5px;
    margin-right: 20px;
    box-sizing: border-box;
    .checkbox-label {
        width: 20%;
        input {
            height: 1.5rem
        }
    }
    .modiInput-label {
        width: 80%;
        text-align: left;
        input {
            width: 90%;
            height: 30px;
        }    
    }
`

export default TodoItem