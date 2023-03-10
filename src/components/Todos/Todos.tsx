import { Todo } from '../../shared/interfaces';

interface Props {
  todos: Todo[];
}

const Todos = ({ todos }: Props) => {
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
