import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BarraNavegacao from './components/BarraNavegacao';
import Cadastro from './components/Cadastro';
import NovoAgricultor from './components/agricultor/NovoAgricultor';
import AlterarAgricultor from './components/agricultor/AlterarAgricultor';
import Agricultor from './components/agricultor/Agricultor';


function Login() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>Acesso - Sistema BookSell</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Digite seu email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="senha">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <div className="mb-3">
                  <p>
                    Ainda não tem conta? Clique <NavLink to="/cadastrar">aqui</NavLink> para se cadastrar!
                  </p>
                </div>

                <NavLink to="/components/BarraNavegacao">
                  <Button variant="primary">Acessar</Button>
                </NavLink>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/components/BarraNavegacao" element={<BarraNavegacao />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route path="/Agricultor" element={<Agricultor />} />
          <Route path="/Novo-Agricultor" element={<NovoAgricultor />} />
          <Route path="/Alterar-Agricultor/:id" element={<AlterarAgricultor />} />
      
      {/* Outras rotas podem ser adicionadas aqui */}
    </Routes>
  </Router>
  );
}

export default App;
