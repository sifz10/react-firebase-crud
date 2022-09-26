import React from 'react';
import Cards from './Cards';
import {Container, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <Container>
     <Row>
      <Col>
       <Cards/>
      </Col>
     </Row>
  </Container>
  );
}

export default App;
