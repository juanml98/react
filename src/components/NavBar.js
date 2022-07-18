import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget.js/cartWidget';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed='top' style={{padding: '10px'}}>
        <Container>
          <Navbar.Brand href="#home">Smart Coder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="">Celulares</Nav.Link>
            <Nav.Link href="">Contacto</Nav.Link>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;