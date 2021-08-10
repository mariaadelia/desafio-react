import { Button, Card, Container, Form, Jumbotron, Row } from 'react-bootstrap';
import React from 'react';

function App() {
  const [textoBusca, setTextoBusca] = React.useState("");
  const textoBuscaMudou = event => setTextoBusca(event.target.value);

  const produtos = React.useMemo(() => [
    {
      nome: 'Bombom ao Leite',
      imagem: 'static/bombom_leite.png',
      preco: 'R$ 2,99',
      descricao: 'Bombom de chocolate com leite'
    }, {
      nome: 'Bombom Meio Amargo',
      imagem: 'static/bombom_amargo.png',
      preco: 'R$ 2,99',
      descricao: 'Bombom de chocolate 65%'
    }, {
      nome: 'Bombom de Licor de Cereja',
      imagem: 'static/bombom_cereja.png',
      preco: 'R$ 4,99',
      descricao: 'Bombom recheado com cereja e licor'
    }, {
      nome: 'Barra ao Leite',
      imagem: 'static/barra.png',
      preco: 'R$ 8,99',
      descricao: 'Barra de 120g de chocolate ao leite'
    }, 
  ], []);

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
          <Row>
            {produtos.map((d, i) => 
              <Card key={i} className="m-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={d.imagem} />
                <Card.Body>
                  <Card.Title>{d.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{d.preco}</Card.Subtitle>
                  <Card.Text>{d.descricao}</Card.Text>
                  <Button variant="primary">Visualizar Produto</Button>
                </Card.Body>
              </Card>
              )}
          </Row>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default App;
