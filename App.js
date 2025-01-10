
import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
        <Container>
      <Row>
        <Col>
          <div col xs={12} sm={12} md={6} lg={4} style={{backgroundImage: "url('./Mujer.jpeg')",  height: '240px',backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Mujer</div>
        </Col>
        <Col>
        <div xs={12}  col  sm={12} md={6} lg={4} style={{backgroundImage: "url('./Hombre.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Hombre</div>

        </Col>
        <Col>
        <div xs={12} col sm={12} md={6}  lg={4} style={{backgroundImage: "url('./Niño.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}>Layout Niño</div>

        </Col>
      </Row>
    </Container>


    </>
  );
}

export default App;
