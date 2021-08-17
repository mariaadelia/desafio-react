import { Container, Jumbotron } from 'react-bootstrap';
import React from 'react';
import Componente from './Componente';

function App() {
  
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Doce Sonho</h1>
        <Container>

        {/** Tag responsável pelos componentes (barra de pesquisa e produtos) */}  
        <Componente>
        </Componente>
        {/** /Tag responsável pelos componentes (barra de pesquisa e produtos) */} 
        
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default App;
