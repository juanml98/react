import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget.js/cartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
      <nav className="NavBar">
        
        <Navbar.Brand href="/" style={{padding: '25px'}}>Smart Coder</Navbar.Brand>
          <div className="elementsHead">
            <div className="Listado">
              <Link to='/categorias/Apple' className='ListadoHijo'>Apple</Link>
              <Link to='/categorias/Android' className='ListadoHijo'>Android</Link>
             
            </div>
             
             <CartWidget /> 
                  
          </div>
      </nav>
  )
}

/*function NavBar() {
  return (
    <div>
    <nav>
      <Navbar bg="dark" variant="dark" expand="lg" style={{padding: '10px'}}>
        <Container>
          <Navbar.Brand href="/">Smart Coder</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Inicio</Link>
            <Link to='/categorias'>Categorias</Link>
            <Link to='/contacto'>Contacto</Link>
          </Nav>
        <CartWidget />
        </Container>
      </Navbar>
    </nav>
    <Outlet />
    </div>
  );
}*/

export default NavBar;