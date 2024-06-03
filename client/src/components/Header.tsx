import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./assets/Logo";
import CartIcon from "./assets/CartIcon";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header className="w-full bg-white">
      <Navbar variant="dark" expand="md" collapseOnSelect className="shadow-b">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Logo variant="black" className="w-48 sm:w-auto" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-black"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="flex flex-col my-6 md:flex-row md:my-0 justify-around items-center gap-4">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <div className="flex justify-center items-center">
                      <CartIcon className="h-16" />
                      <p className="ml-1 text-black">Cart</p>
                    </div>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <div className="flex justify-center items-center">
                      <FaUser color="black" size={32} />
                      <p className="text-black ml-1">Sign In</p>
                    </div>
                  </Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;