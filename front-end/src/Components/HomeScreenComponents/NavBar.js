import React from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import logo from "../../assets/transparent_logo.png";
import "./NavBar.css";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropDown from "react-bootstrap/DropDown";
import AboutPage from "./AboutPage";
import Support from "./Support";
import ContactUs from "./ContactUs";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';





export default function NavBar() {
  // let shelterPath = window.location.pathname.includes("/shelter");
  // let userPath = window.location.pathname.includes("/user");
  let currentWindow = window.location.pathname;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // let pawsterHomePageVal = `${window.location.pathname.split("/")[1]}/${
  //   window.location.pathname.split("/")[2]
  // }`;

  const { logOut, user, googleSignIn } = UserAuth();
  let navigate = useNavigate();

  const sections = [
    { title: "About", url: "/about" },
    { title: "Support", url: "/support" },
    { title: "Dev", url: "/contactUs" },
    
    // { title: "shelters", url: "/contactUs" },
    // { title: "Form", url: "/form" },
  ];
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

  // const loggedInTitle = () => {
  //   return (
  //     <Link href={`/${pawsterHomePageVal}`} underline="none">
  //       <h2>Pawster</h2>
  //     </Link>
  //   );
  // };

  // if (currentWindow = "/")
  // {console.log(currentWindow)}
// ------>Menu Icon ------>
  // const ITEM_HEIGHT = 48;
//  const [anchorE1, setAnchorE1] = React.useState(null);
//  const open = Boolean(anchorE1);
//  const handleClick = (event) => {
//    setAnchorE1(event.currentTarget);
//  };
//  const handleClose = () => {
//    setAnchorE1(null);
//  };
  if (currentWindow === "/") {
    return (
      // <div className="NavBar-overall-Div">
      
      <div className="custom-navbar">
        
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        
      
        <Link href="/" underline="none">
          <img className="NavBar-logo" src={logo} alt={'logo'}/>
        </Link>

        {/* Logic to hide bottom navBar when we are on other pages that aren't 'Home', such as '/user' or 'shelter'*/}
        <div className="NavBar-sections">
        
        
          {sections.map((section) => (
            <Link
              underline="none"
              noWrap
              key={section.title}
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
            <div>
            </div>
            
              {/* {section.title} */}
            </Link>
          ))} 
          
          
              
        </div>

        <div className="NavBar-user-info">
          {" "}
          {/* start of the dropdown menus */}
          {/* ======end of the new dropdown */}
          <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      {/* <span className="profile">{user?.displayName}</span> */}
      <h2>Profile</h2>
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        
          <MenuItem onClick={handleClose}><DropDown.Item href="/about">
          About
        </DropDown.Item></MenuItem>
        <MenuItem onClick={handleClose}><DropDown.Item href="/about">
          Support
        </DropDown.Item></MenuItem>
        <MenuItem onClick={handleClose}><DropDown.Item href="/about">
          Developer
        </DropDown.Item></MenuItem>
        <MenuItem onClick={handleClose}><DropDown.Item href="/about">
          SheltersPage
        </DropDown.Item></MenuItem>
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
        
      </Menu>
          {user?.displayName ? (
            <img
              width="45px"
              height="45px"
              style={{ marginRight: "20px", borderRadius: "25px" }}
              alt='user-img'
              src={user?.photoURL}
            />
          ) : null}
          {/* {!user?.displayName ? null : (
            <button className="NavBar-login-button2">
              <Link className="NavBar-login-button2" href="/user/1/explore">
                Explore
              </Link>
            </button>
          )} */}
          <div className="NavBar-signin">
            {/* {user?.displayName ? (
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
            )} */}
          </div>
        </div>
      </div>
      // </div>
    );
  } else {
    return (
      // <div className="NavBar-overall-Div">
      <div className="custom-navbar2">
        {/* Logic to return to the proper home path, whether it is '/user' or 'shelter'*/}
        <Link href="/" underline="none">
          <img className="NavBar-logo2" src={logo} alt='navbar-logo-2' />
        </Link>

        {/* Logic to hide bottom navBar when we are on other pages that aren't 'Home', such as '/user' or 'shelter'*/}
        <div className="NavBar-sections2">
          {sections.map((section) => (
            <Link
              underline="none"
              noWrap
              key={section.title}
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
        </div>

        <div className="NavBar-user-info2">
          {user?.displayName ? (
            <img
              width="45px"
              height="45px"
              style={{ marginRight: "20px", borderRadius: "25px" }}
              src={user?.photoURL}
              alt='user-img-2'
            />
          ) : null}

          {!user?.displayName ?  null : (
            <button className="NavBar-login-button2">
              <Link className="NavBar-login-button2" href="/user/1/explore">
                Explore
              </Link>
            </button>
          )}
          
          <div className="NavBar-signin2">
            {user?.displayName ? (
              <button className="NavBar-login-button2" onClick={handleSignOut}>
                Logout
              </button>
            ) : (
              <button
                className="NavBar-login-button2"
                onClick={handleGoogleSignIn}
              >
                Log in
              </button>
            )}
            
          </div>
        </div>
        
      </div>

    );
  }
}
