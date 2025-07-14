import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function AppNavbar() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">MedicalAssist</Navbar.Brand>

        <Nav className="ms-auto">
          {user ? (
            <>
              <Navbar.Text className="me-3 text-white">
                {user.name} ({user.role})
              </Navbar.Text>
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/" variant="outline-light" className="me-2">
                Login
              </Button>
              <Button as={Link} to="/register" variant="outline-success">
                Register
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
