import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Nav.Item>
    <Nav.Link as={Link} to="/gastos">
      Gastos
    </Nav.Link>
  </Nav.Item>
     
 

  );
}

export default Header;