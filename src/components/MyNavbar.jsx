import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.png";

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="mx-4 logoImg" src={logo} alt="Logo" />
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
