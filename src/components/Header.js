import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

import "../scss/components/header.scss";

const Header = () => {
  return (
    <div className={`header-wrapper pt-3 pb-3 shadow-xss`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 navbar pt-0 pb-0">
            <div className="w-100">
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="/">
                    <h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">
                      MarketClass
                      <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                        El camino hacia el éxito comienza aquí
                      </span>
                    </h1>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/about">Sobre nosotros</Nav.Link>
                      <Nav.Link href="/courses-grid">Todos los cursos</Nav.Link>
                      <Nav.Link href="/contact">Contacto</Nav.Link>
                      <Nav.Link href="/login" className="account-navlink">
                        <b>Cuenta</b>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
          <div className="col-lg-3 text-right account-container">
            <Link
              to="/login"
              className={`float-right d-none d-lg-block text-center mt-1 ml-4 text-grey-800`}
            >
              <i className="ti-user font-lg"></i>
              <span className="font-xssss fw-500 d-block lh-1">Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
