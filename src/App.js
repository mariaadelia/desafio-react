import { Container, Form, Jumbotron, Row } from 'react-bootstrap';
import React from 'react';
import Componente from './Componente';

function App() {
  const [textoBusca, setTextoBusca] = React.useState("");
  const textoBuscaMudou = event => setTextoBusca(event.target.value);

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Doce Sonho</h1>
        <Container>
        <Row>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" value={textoBusca} onChange={textoBuscaMudou} placeholder="Buscar por produto..." />

              </Form.Group>
            </Form>
          </Row>
        <Componente></Componente>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default App;
