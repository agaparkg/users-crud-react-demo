import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo-white.png";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              alt="logo"
              src={logo}
              style={{
                height: 60,
                width: 60,
                marginRight: "20px",
              }}
            />
            React Users CRUD App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
