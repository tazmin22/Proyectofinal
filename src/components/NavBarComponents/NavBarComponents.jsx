import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Category from '../pages/Category';
import Home from '../pages/home';

 const NavBar = () => {
   return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand className='funciona'>
           <Link to="/">Cafeteria  ☕</Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
             <Nav.Link className='chau'>
               <Link to="/">Home</Link>
                    </Nav.Link>
             <NavDropdown title="Categorias" id="basic-nav-dropdown">
               <NavDropdown.Item>
                     <Link to="/category/bajo">Categoria1</Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                 <Link to="/category/alto">Categoria2</Link>
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
         </Navbar.Collapse>
       </Container>
       <CartWidget />
     </Navbar>
   ); };

 export default NavBar;