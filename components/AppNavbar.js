import {Navbar, Container, Nav} from 'react-bootstrap';


export default function AppNavbar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow">
        <Container>
          <Navbar.Brand href="#home" className='fw-bold'>UA ENROLLMENT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Courses</Nav.Link>
              <Nav.Link href="#link">Register</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );  
}