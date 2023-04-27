import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Share/Navbar";
import Footer from "./Components/Share/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./Components/Share/LeftSide";
import RightSide from "./Components/Share/RightSide";
import Home from "./Pagese/Home/Home";
import Navbarr from "./Components/Share/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Navbarr />

      
        <Row>
          <Col>
            <LeftSide />
          </Col>

          <Col lg={6}>
            <Outlet />
          </Col>
          <Col>
            <RightSide />
          </Col>
        </Row>
      

      <Footer />
    </Container>
  );
}

export default App;
