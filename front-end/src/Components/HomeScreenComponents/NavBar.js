// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import logo from "../../assets/transparent_logo.png";
import "./NavBar.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./AboutPage";

import ContactUs from "./ContactUs";
import { Offcanvas } from "react-bootstrap";
import {Button} from 'react-bootstrap';
// import Button from "@mui/material/Button";
import ContactForm from "./ContactForm";
import Carousel from "react-bootstrap/Carousel";



function NavBar() {
 
  //   window.location.pathname.split("/")[2]
  // }`;

  const { logOut, user, googleSignIn } = UserAuth();

  

  let navigate = useNavigate();

 

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      navigate("/");
      alert("You have been logged out");
    } catch (err) {
      console.log(err);
    }
  };


  const handleGoogleSignIn = async () => {
    alert("You will be redirected to log in");
    try {
      await googleSignIn();
      console.log(user);
      if (user) {
        navigate("/user/1/explore");
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (

      <>
    {[false].map((expand) => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3 navbar">
          <Container fluid>
          <Navbar.Brand>
       
        <Nav.Link href="/" underline="none">
          <img className="NavBar-logo" src={logo} alt={"logo"} />
        </Nav.Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
        <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Categories
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="user/1/explore">
                  Explore
                </Nav.Link>
                <Nav.Link href="/ContactUs">Developer</Nav.Link>
                <Nav.Link href="/metaMask">MetaMask</Nav.Link>
                {/* <Nav.Link href="/About">About
          
            </Nav.Link> */}

            {/* <Nav.Link href="/Support">Support
            </Nav.Link> */}
            {/* <Nav.Link href="/ContactUs">Developer</Nav.Link> */}
            <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Profile
      </Dropdown.Toggle>

      
      <Dropdown.Menu>
      
        <Dropdown.Item href="/Account">Account</Dropdown.Item>
        <Dropdown.Item href="/about">About </Dropdown.Item>
        <Dropdown.Item href="/login">Sign In</Dropdown.Item>
        <Dropdown.Item href="/support">Support</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
      Forms
      </Dropdown.Toggle>

      
      <Dropdown.Menu>
      
        <Dropdown.Item href="/petForm">Pet Form</Dropdown.Item>
        
        <Dropdown.Item href="/userForm">User Form</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            
          
        
        <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  <NavDropdown.Item>
          {user && user.displayName ? (
            <img
              
              style={{ marginRight: "20px", borderRadius: "25px", width:"45px" ,
              height:"45px" }}
              alt="user-img"
              src={user && user.photoURL}
            />
          ) : null}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          
          <NavDropdown.Item>

          {user && user.displayName ? (
            <button className="NavBar-login-button2" onClick={handleSignOut}>
              Logout
            </button>
          ) : (
            <button
              className="NavBar-login-button2"
              onClick={handleGoogleSignIn}
            >
              Log In
            </button>
          )}
          </NavDropdown.Item>
          </NavDropdown>
  
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    // aria-label="Search"
                    
                    
                  />
                  <Button variant="primary">Search</Button>
                </Form>
                <Button variant="warning">
        <a href="/">BACK</a>
      </Button>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>   
                 
    </Navbar>
    ))}
    </>
    )
    }
    export default  NavBar
    
    
  
