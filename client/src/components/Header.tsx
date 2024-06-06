import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "./assets/Logo";
import CartIcon from "./assets/CartIcon";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Header = () => {
  const cartQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  return (
    <header className="w-full bg-white">
      <Navbar
        variant="dark"
        expand="md"
        collapseOnSelect
        className="shadow-b flex justify-between w-full"
      >
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
                    <div className="relative flex justify-center items-center">
                      <CartIcon className="h-16" />
                      <p className="ml-1 text-black">Cart</p>
                      {cartQuantity > 0 && (
                        <span
                          className="absolute rounded-full bg-black flex justify-center items-center 
                        h-5 w-5 tracking-tighter text-white text-3xs -top-1 left-0"
                        >
                          {cartQuantity}
                        </span>
                      )}
                    </div>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/user">
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
