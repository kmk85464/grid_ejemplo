
import './App.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
function App() {
  return (
    
    <Container>
      <Row>
        <Col md={6} lg={4}   style={{backgroundImage: "url('./Mujer.jpeg')",  height: '240px',backgroundSize: 'cover', backgroundPosition: 'center center'}}Layout Mujer></Col>
        <Col md={6} lg={4} style={{backgroundImage: "url('./Hombre.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}Layout Hombre></Col>
        <Col  col  md={6}lg={4}  style={{backgroundImage: "url('./Niño.jpeg')", height: '240px', backgroundSize: 'cover', backgroundPosition: 'center center'}}Layout Niño></Col>
        
      </Row>
    </Container>
   
  );
}

export default App;
