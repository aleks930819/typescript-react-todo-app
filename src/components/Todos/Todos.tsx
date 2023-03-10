import { Button, Col, Form, Row } from 'react-bootstrap';
import { Todo,TodoState } from '../../shared/interfaces';


const Todos = ({ todos, setTodos }: TodoState) => {
  const changeIsComepleted = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodoHandler = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Row
          className="justify-items-center align-items-center w-100"
          key={todo.id}
        >
          <Col>
            <Form.Check type="checkbox">
              <Form.Check.Input
                type="checkbox"
                checked={todo.completed}
                onChange={() => changeIsComepleted(todo.id)}
              />
              <Form.Check.Label>{todo.text}</Form.Check.Label>
            </Form.Check>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => deleteTodoHandler(todo.id)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Todos;
