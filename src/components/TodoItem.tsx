import { styled } from "styled-components";
import { useState } from "react"
import Button from "../elements/Button";
import Input from "../elements/Input";
import { TodoItemProps, TodoUpdateRequest } from "../types/TodoType";
import { apis } from "../apis/api";

function TodoItem({ todos, setTodoList, handleDeleteTodo }: TodoItemProps) {
    const [isModifyVer, setIsModifyVer] = useState(false);
    const [modifyInput, setModifyInput] = useState(todos.todo);
    const [isChecked, setIsChecked] = useState(todos.isCompleted);

    // checkbox check여부
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    // todo 수정 로직
    const handleModifyTodo = () => {
        const todoReq: TodoUpdateRequest = {
            todo: modifyInput,
            isCompleted: isChecked
        }

        apis.updateTodo(todos.id, todoReq)
            .then((res) => {
                setTodoList((prevTodoList) =>
                    prevTodoList.map((todo) => todo.id === res.data.id ? { ...todo, todo: res.data.todo, isCompleted: res.data.isCompleted } : todo)
                )
                setIsModifyVer(false);
            }).catch((error) => {
                console.log("수정에러", error)
            })
    }

    return (
        <>
            {
                !isModifyVer ?
                    <List>
                        <Input label={`${todos.todo}`} type="checkbox" value={modifyInput} _onChange={handleCheck} />
                        <Button dataTestId="modify-button" margin="0 8px 0 0" _onClick={() => setIsModifyVer(true)}>수정</Button>
                        <Button dataTestId="delete-button" _onClick={handleDeleteTodo} >삭제</Button>
                    </List> :
                    <ModifyList>
                        <ModiInput>
                            <Input type="checkbox" className="checkbox-label" />
                            <Input dataTestId="modify-input" type="text" size="medium" className="modiInput-label" value={modifyInput} _onChange={(e) => setModifyInput(e.target.value)} />
                        </ModiInput>
                        <Button dataTestId="submit-button" margin="0 8px 0 0" _onClick={handleModifyTodo}>제출</Button>
                        <Button dataTestId="cancel-button" _onClick={() => setIsModifyVer(false)}>취소</Button>
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