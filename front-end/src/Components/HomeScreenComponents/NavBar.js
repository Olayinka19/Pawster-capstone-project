// import React from "react";
import React, { useState } from "react";
// import { Link } from "@mui/material";
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
// import DropdownButton from "react-bootstrap/DropdownButton";
// import DropDown from "react-bootstrap/DropDown";
import AboutPage from "./AboutPage";
// import Support from "./Support";
import ContactUs from "./ContactUs";
import { Offcanvas } from "react-bootstrap";
import Button from "@mui/material/Button";
import ContactForm from "./ContactForm";
// import PetForm from "../Forms/PetForm"
// import UserForm from "../Forms/UserForm"


function NavBar() {
  // let shelterPath = window.location.pathname.includes("/shelter");
  // let userPath = window.location.pathname.includes("/user");

  // let currentWindow = window.location.pathname;

  // let pawsterHomePageVal = `${window.location.pathname.split("/")[1]}/${
  //   window.location.pathname.split("/")[2]
  // }`;

  const { logOut, user, googleSignIn } = UserAuth();
  // const [searchTerm , setSearchTerm] = useState("");
  

  let navigate = useNavigate();

  // const sections = [
  //   { title: "About", url: "/about" },
  //   { title: "Support", url: "/support" },
  //   { title: "Dev", url: "/contactUs" },
  //   { title: "Form", url: "/form" },

  //   // { title: "shelters", url: "/contactUs" },
  // ];
  // The item Height

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      navigate("/");
      alert("you have logged out");
    } catch (err) {
      console.log(err);
    }
  };

//   function handleSearch(e) {
//  e.preventDefault();
//  window.location.replace(`https://pawster.onrender.com/pets/search?q=${searchTerm}`)
//   }
  const handleGoogleSignIn = async () => {
    alert("You will be redirected to log in");
    try {
      await googleSignIn();
      console.log(user);
      navigate("/user/1/explore");
    } catch (error) {
      console.log(error);
    }
  };

    return (

      <>
    {[false].map((expand) => (
        <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
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
                <Nav.Link href="/About">About
          {/* {sections.map((section) => (
            <Nav.Link>
              underline="none"
              noWrap
              key={section.title}
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
          
              

              {section.title} */}
            </Nav.Link>
            <Nav.Link href="/Support">Support
            </Nav.Link>
            <Nav.Link href="/ContactUs">Developer</Nav.Link>
            <Nav.Link href="/Account">Account</Nav.Link>
            <Nav.Link href="/contactForm">ContactForm</Nav.Link>
            <Nav.Link href="/petForm">PetForm</Nav.Link>
            <Nav.Link href="/userForm">UserForm</Nav.Link>
            {/* <Nav.Link href="/shelterForm">ShelterForm</Nav.Link> */}
          
        
        <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                  <NavDropdown.Item>
          {user?.displayName ? (
            <img
              width="45px"
              height="45px"
              style={{ marginRight: "20px", borderRadius: "25px" }}
              alt="user-img"
              src={user?.photoURL}
            />
          ) : null}
          </NavDropdown.Item>
          <NavDropdown.Divider />
          
          <NavDropdown.Item>

          {user?.displayName ? (
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
                  <Button variant="outline-success">Search</Button>
                </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>    
    </Navbar>
    ))}
    </>
    )
    }
    export default  NavBar
    
    
  
