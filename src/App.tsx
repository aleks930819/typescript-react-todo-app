import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FC } from 'react';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';

const App: FC = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
