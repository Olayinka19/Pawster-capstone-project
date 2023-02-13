// import React from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Button } from "react-bootstrap";

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
        <Navbar
          key={expand}
          bg="primary"
          expand={expand}
          className="mb-3 navbar"
        >
          <Container fluid>
            <Navbar.Brand>
              <Nav.Link href="/" underline="none">
                <img className="NavBar-logo" src={logo} alt={"logo"} />
              </Nav.Link>
            </Navbar.Brand>

            {/* <div>
            <Nav.Link href="/PetBlog">Blog</Nav.Link>
          </div> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="dropdown-container"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div style={{ display: "flex" }}>
                    {user && user.displayName ? (
                      <div>
                        <img
                          style={{
                            marginRight: "20px",
                            borderRadius: "25px",
                            width: "45px",
                            height: "45px",
                          }}
                          alt="user-img"
                          src={user && user.photoURL}
                        />

                        <p>Hi, {user.displayName}</p>
                      </div>
                    ) : (
                      <Link to="/user/1/explore">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5267/5267467.png"
                          width="55px"
                          height="55px"
                        ></img>{" "}
                      </Link>
                    )}
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">
                    <Button variant="warning">
                      <img
                        width="35px"
                        height="35px"
                        src="https://as2.ftcdn.net/v2/jpg/00/82/56/61/1000_F_82566152_gkZ6X4ihh2flkBLDnX43Y3hB9YDUG5zm.jpg"
                      ></img>
                    </Button>
                    {/* <iframe width="60px" height="60px" src="https://cdn-icons-mp4.flaticon.com/512/8718/8718662.mp4"></iframe> */}
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="/ContactUs">Developer</Nav.Link>
                  <hr />
                  <Nav.Link href="/Chats">
                    <img
                      width="40px"
                      height="40px"
                      src="https://cdn-icons-png.flaticon.com/512/51/51834.png?w=1480&t=st=1676255222~exp=1676255822~hmac=1fc6ab5280174d68673154e9dae65882899266720bf08106c6bea6dd0b547d8a"
                    ></img>
                  </Nav.Link>
                  <hr />
                  <Nav.Link href="/ShelterLocation">Shelters</Nav.Link>
                  <hr />
                  <Nav.Link href="/PetBlog">Blog</Nav.Link>
                  <hr />

                  <a href="/Affiliate">
                    <Button variant="warning">
                      <img
                        width="40px"
                        height="40px"
                        src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5326_-_Amazon-512.png"
                      ></img>
                      Pets Store!
                    </Button>
                  </a>
                  <hr />
                  <div></div>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="dropdown"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/17/17004.png?w=1480&t=st=1676255614~exp=1676256214~hmac=27db7197547a4f87036c88e6bd17d2bda9cde1e905a489b09f54b50762034a77"
                        width="40px"
                        height="40px"
                      ></img>
                    </Dropdown.Toggle>
                    <hr />
                    <Dropdown.Menu className="dropdown-content">
                      <Dropdown.Item href="/Account">Account</Dropdown.Item>
                      {/* <Dropdown.Item href="/chats"></Dropdown.Item> */}
                      <Dropdown.Item href="/about">About </Dropdown.Item>
                      <Nav.Link href="/metaMask">
                        <img
                          width="40px"
                          height="40px"
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nigeriabitcoincommunity.com%2Fwp-content%2Fuploads%2F2020%2F11%2FUntitled-design-32.png&f=1&nofb=1&ipt=0a5621507d909d3f36ee1cfac4db52747b199011f88fad980d58748f390b75d3&ipo=images"
                        ></img>
                      </Nav.Link>
                      <Dropdown.Item href="/Login">Sign Up</Dropdown.Item>
                      <Dropdown.Item>
                        {" "}
                        {user && user.displayName ? (
                          <button
                            className="NavBar-login-button2"
                            onClick={handleSignOut}
                          >
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
                      </Dropdown.Item>

                      <Dropdown.Item href="/support">Support</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      Forms
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/petForm">Pet Form</Dropdown.Item>
                      <Dropdown.Item href="/EditPetForm">
                        Pet Form Edit
                      </Dropdown.Item>

                      <Dropdown.Item href="/userForm">User Form</Dropdown.Item>
                      <Dropdown.Item href="/shelter/*">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* <NavDropdown
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
          </NavDropdown> */}
                </Nav>
                <hr />
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    // aria-label="Search"
                  />
                  <hr />
                </Form>
                <Button variant="light">
                  <img
                    width="30px"
                    height="30px"
                    src="https://cdn-icons-png.flaticon.com/512/9655/9655793.png"
                  ></img>
                </Button>
                <hr />
                <Button variant="warning">
                  <a href="/">
                    <img
                      width="30px"
                      height="30px"
                      src="https://cdn-icons-png.flaticon.com/128/3736/3736120.png"
                    ></img>
                  </a>
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default NavBar;
