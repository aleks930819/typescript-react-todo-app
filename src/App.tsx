import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FC, useState } from 'react';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';

import { Todo } from './shared/interfaces';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  return (
    <Container>
      <Header todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default App;
