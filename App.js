
import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
function App() {
  return (
    <>
        <Container>
      <Row>
        <Col>
          <div class="sm:m-1 md:m-5 lg:m-10" col xs={12} sm={12} md={6} offset={1}  style={{backgroundImage: "url('./Mujer.jpeg')",  height: '240px',backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Mujer</div>
        </Col>
        <Col>
        <div class="sm:m-1 md:m-5 lg:m-10" col xs={12} sm={12} md={6} offset={5}   style={{backgroundImage: "url('./Hombre.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Hombre</div>

        </Col>
        <Col>
        <div  class="sm:m-1 md:m-5 lg:m-10"  col xs={12} sm={12} md={6} offset={5}  style={{backgroundImage: "url('./Niño.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Niño</div>

        </Col>
      </Row>
    </Container>
  
    </>
  );


  
}

export default App;
