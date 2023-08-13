import { useState, useEffect } from "react"
import { styled } from "styled-components";
import Button from "../elements/Button";
import Input from "../elements/Input";
import { apis } from "../apis/api";
import { Todo, TodoList } from "../types/TodoType";
import TodoItem from "./TodoItem";

function TodoForm() {
    const [todoList, setTodoList] = useState<TodoList[]>([]);
    const [inputTodo, setInputTodo] = useState('')


    // todo 생성하기
    const handleCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todoRequest: Todo = {
            todo: inputTodo,
        };
        apis.createTodo(todoRequest)
            .then((res) => {
                console.log(res.data)
                setTodoList([...todoList, res.data]);
                setInputTodo('');
            }).catch((error) => {
                console.log(error)
            })

    }

    // todoList get 해오기
    useEffect(() => {
        apis.getTodo()
            .then((res) => {
                console.log(res.data)
                setTodoList(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <TodoFormField>
            <InputForm onSubmit={handleCreateTodo}>
                <Input
                    dataTestId="new-todo-input"
                    size="large"
                    value={inputTodo}
                    _onChange={(e) => setInputTodo(e.target.value)}
                />
                <Button dataTestId="new-todo-add-button" size="medium">추가</Button>
            </InputForm>
            <ListForm>
                {
                    todoList.map((todo) => {
                        return <TodoItem key={todo.id} {...todo} />
                    })
                }
            </ListForm>
        </TodoFormField>
    )
}

const TodoFormField = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputForm = styled.form`
    width: 100%;
    background-color: #F7EA87;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 1rem;
    box-sizing: border-box;
    label {
        margin-right: 25px;
    }
`

const ListForm = styled.ul`
   width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    box-sizing: border-box;
    background-color: #F7EA87;
    border-radius: 1rem;
    li:last-child {
        margin: 0;
    }
`

export default TodoForm