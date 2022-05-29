import { Routes, Route, useNavigate } from "react-router-dom";
import "./style/App.scss";

import { Navbar, Nav, Container } from "react-bootstrap";

import Home from "./pages/Home";
import Hook from "./pages/Hook";

function App() {
  let navigate = useNavigate();

  return (
    <div className="Gate">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            ZET GAR
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/hook");
              }}
            >
              react-hook
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hook" element={<Hook />} />
      </Routes>
    </div>
  );
}

export default App;
