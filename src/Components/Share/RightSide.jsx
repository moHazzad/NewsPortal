import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGooglePlusG,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZoneOne from "../../assets/qZone1.png";
import qZoneTwo from "../../assets/qZone2.png";
import qZoneTre from "../../assets/qZone3.png";
import bgImage from "../../assets/bg.png";

function RightSide() {
  return (
    <div>
      <div className="my-2">
        <p className="fs-4 fw-bold mb-3 ">Login With</p>
        <Button variant="outline-secondary mb-1" className="px-2">
          {" "}
          <FaGooglePlusG /> Login with Google
        </Button>
        <Button variant="outline-secondary" className="px-2">
          {" "}
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="my-3">
        <p className="fs-4 fw-bold mb-3 ">Find Us On</p>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="my-3 bg-light p-2 rounded">
        <p className="fs-4 fw-bold mb-3 ">Find Us On</p>
        <div className="d-flex flex-column gap-3">
          <img src={qZoneOne} alt="" />
          <img src={qZoneTwo} alt="" />
          <img src={qZoneTre} alt="" />
        </div>
      </div>
      <div className="py-5" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="text-center text-white p-3">
          <h1>Create an</h1>
          <h1>Amazing</h1>
          <h1>Newspaper</h1>
          <p className="my-3" >Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger" className="rounded-0" >Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
