export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

};