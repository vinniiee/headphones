import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "./assets/Logo";
import CartIcon from "./assets/CartIcon";
import { FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logout as logoutAction } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logout();
      dispatch(logoutAction());
      navigate("/login");
    } catch (err: any) {
      toast.error(err.data?.message || err.message);
    }
  };

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
                      {cart.totalQuantity > 0 && (
                        <span
                          className="absolute rounded-full bg-black flex justify-center items-center 
                        h-5 w-5 tracking-tighter text-white text-3xs -top-1 left-0"
                        >
                          {cart.totalQuantity}
                        </span>
                      )}
                    </div>
                  </Nav.Link>
                </LinkContainer>
                {userInfo ? (
                  <div className="flex justify-center items-center  text-black/80">
                    <FaUser color="black" size={32} />
                    <NavDropdown
                      title={
                        <span className="text-black/80 capitalize">
                          {userInfo.name}
                        </span>
                      }
                      id="username"
                    >
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : (
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <div className="flex justify-center items-center">
                          <FaUser color="black" size={32} />
                          <p className="text-black ml-1">Sign In</p>
                        </div>
                      </Nav.Link>
                    </LinkContainer>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
