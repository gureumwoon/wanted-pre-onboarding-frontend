export interface Todo {
    todo: string;
};

export interface TodoList extends Todo {
    id: string;
    isCompleted: boolean;
    userId: string;
}