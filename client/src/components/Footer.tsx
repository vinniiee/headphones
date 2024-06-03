import { Col, Container, Row } from "react-bootstrap";
import Logo from "./assets/Logo";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <Container>
        <Row>
          <Col>
            <div className="flex justify-center items-center gap-4 py-2">
              <Logo className="w-48 sm:w-auto"/> <p className="mt-2">&copy; {new Date().getFullYear()}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;