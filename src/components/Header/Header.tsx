import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import { Todo, TodoState } from '../../shared/interfaces';

const Header = ({ todos, setTodos }: TodoState) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    const newTodo: Todo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);

    setTodo('');
  };

  return (
    <Form className="mt-5" onSubmit={addTodoHandler}>
      <Form.Label className="text-center">Todo List</Form.Label>
      <Row className="justify-items-center align-items-center">
        <Col>
          <Form.Control
            placeholder="Add todo..."
            value={todo}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Button variant="success" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Header;
