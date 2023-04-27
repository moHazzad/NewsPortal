import React from "react";
import logo from "../../../src/assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavigationBar from "./NavigationBar";

function Navbarr() {
  return (
    <div className="">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="pt-2">Journalism Without Fear or Favour</p>
        <p className="p-0">{moment().format("dddd MMMM Do, YYYY")}</p>
      </div>
      <div className="d-flex py-3 gap-2  rounded">
        <Button variant="danger">Latest</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Navbarr;
