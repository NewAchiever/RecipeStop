import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import iconImg from '../icon/icon.jpg'

function NavBar() {
  return (
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={ iconImg }
              width="30 "
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Recipe Book
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavBar;