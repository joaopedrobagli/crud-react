import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BarraNavegacao from '../BarraNavegacao';

const Agricultor = () => {
    const navigate = useNavigate();

   
    const Agricultor = [
        { id: 1, nome: 'joao', email: 'joao@gmail', senha: '1111111', cpf: '12222' },
        { id: 2, nome: 'joao', email: 'joao@gmail', senha: '1111111', cpf: '12222' },
        { id: 2, nome: 'joao', email: 'joao@gmail', senha: '1111111', cpf: '12222' },
        
    ];

    const handleNovoAgricultor = () => {
        navigate('/novo-Agricultor');
    };

    const handleAlterarAgricultor = (id) => {
        navigate(`/Alterar-Agricultor/${id}`);
    };

    const handleExcluirAgricultor = (id) => {
    
        console.log(`Excluir Agricultor com id: ${id}`);
    };

    return (
        <>
            <BarraNavegacao />
            <Container className="mt-5">
                <h2>Gerenciar Agricultor</h2>
                <Button variant="primary" className="mb-3" onClick={handleNovoAgricultor}>
                    Novo Agricultor
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>email</th>
                            <th>senha</th>
                            <th>cpf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Agricultor.map((Agricultor) => (
                            <tr key={Agricultor.id}>
                                <td>{Agricultor.nome}</td>
                                <td>{Agricultor.email}</td>
                                <td>{Agricultor.senha}</td>
                                <td>{Agricultor.cpf}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleAlterarAgricultor(Agricultor.id)}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleExcluirAgricultor(Agricultor.id)}
                                    >
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Agricultor;