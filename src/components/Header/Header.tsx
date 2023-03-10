import { Button, Col, Container, Form, Row } from 'react-bootstrap';

type Props = {};

const Header = (props: Props) => {
  return (
    <Form className="mt-5">
      <Form.Label className="text-center">Todo List</Form.Label>
      <Row className="justify-items-center align-items-center">
        <Col>
          <Form.Control placeholder="Add todo..." />
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
