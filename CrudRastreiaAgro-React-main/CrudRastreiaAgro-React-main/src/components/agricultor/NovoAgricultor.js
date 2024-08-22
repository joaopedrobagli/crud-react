import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BarraNavegacao from '../BarraNavegacao';

const NovoAgricultor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Novo agricultor:', { nome, email, senha, cpf });
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Novo Agricultor</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSenha" className="mt-3">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCpf" className="mt-3">
                        <Form.Label>Cpf</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite o Cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default NovoAgricultor;
