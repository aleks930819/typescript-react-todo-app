import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container } from 'react-bootstrap';
import { FC, useState } from 'react';

import Header from './components/Header/Header';

import { Todo } from './shared/interfaces';
import Todos from './components/Todos/Todos';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Container>
      <Header todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </Container>
  );
};

export default App;
