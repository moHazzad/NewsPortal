import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import NavigationBar from "../Share/NavigationBar";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <NavigationBar />
      <div className="    " >
        <div className=" w-75 mx-auto vh-100   d-flex align-items-center justify-content-center ">
          <Form className="  ">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <div className="mb-2" >
            <Form.Text className="text-black">
                <Link to={'/register'}>don't have an account?</Link>
              </Form.Text>
            </div>
            <Button variant="dark" type="submit">
              Login
            </Button>
            <div>
            <Form.Text className="text-danger">
                We'll never share your email with anyone else.
              </Form.Text>
            <Form.Text className="text-success">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>
          </Form>
          
        </div>
      </div>
    </>
  );
}

export default Login;
