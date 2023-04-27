import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Share/Navbar";
import Footer from "./Components/Share/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "./Components/Share/LeftSide";
import RightSide from "./Components/Share/RightSide";
import Home from "./Pagese/Home/Home";
import Navbarr from "./Components/Share/Navbar";

function NewsLayout() {
  return (
    <Container>
      <Navbarr />

      
        <Row>

          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3} >
            <RightSide />
          </Col>
        </Row>
      

      <Footer />
    </Container>
  )
}

export default NewsLayout