export interface Todo {
    todo: string;
};

export interface TodoList extends Todo {
    id: number;
    isCompleted: boolean;
    userId: number;
}

export interface TodoItemProps {
    todos: TodoList;
    // setTodoList는 TodoList[] 형태의 상태를 업데이트하는 함수
    setTodoList: React.Dispatch<React.SetStateAction<TodoList[]>>;
}

export interface TodoUpdateRequest {
    todo: string;
    isCompleted: boolean;
}