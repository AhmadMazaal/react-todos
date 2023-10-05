import { Todo } from "../types/models";

interface Props {
    todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
    return <div>{todo.text}</div>;
}

