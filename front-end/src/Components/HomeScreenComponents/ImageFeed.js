import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./ImageFeed.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import { Googlebutton } from 'react-google-button'
import { UserAuth } from "../../Context/AuthContext";
import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const { logOut, user, googleSignIn } = UserAuth();
  let navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    alert("You will be redirected to log in");
    try {
      await googleSignIn();
      console.log(user);
      if (!user) {
        navigate("/Login");
      } else {
        navigate("/user/1/explore")
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="outter-div" sx={{ backgroundColor: "black" }}>
      <div className="splash-image">
        {/* <h1>Find the right pet for you</h1> */}
       
        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img width="480px" height="320px" 
          className="first-image" 
          src="https://as2.ftcdn.net/v2/jpg/03/43/93/67/1000_F_343936721_qfEv7F66I866hz4G3MbTm5PFubzhlNSR.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        borderradius = "20x%"
        width="480px" height="320px" 
          className="first-image" 
          src="https://t3.ftcdn.net/jpg/03/43/93/66/240_F_343936683_P6ceHd41JoSqWUWp73rLtART3Uh4wF5B.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
       width="480px" height="320px" 
       border-radius = "20x%"
          className="first-image" 
          src="https://as2.ftcdn.net/v2/jpg/05/58/60/49/1000_F_558604966_WzIklLzwVaFT2YyXFKTQ5q7khGzm1c2C.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        border-radius = "20x%"
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/05/68/89/54/1000_F_568895465_ijrLFhsS7ge54WTFSxWQHzx1S7PdWw15.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px"
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/03/43/93/64/1000_F_343936486_opgh9u3iuUeEvpQc76uHOOwYwWys7Zfm.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/05/57/06/70/1000_F_557067024_yqdFQ16QfdvljQ0IcV3oKeqiCz6xFlk5.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/05/55/64/02/1000_F_555640204_OpD4wnaJ0sK0ablG3eKKAApuJM2ePS7p.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/04/80/02/28/1000_F_480022826_6268Oj4P6hkEfFnZSINTMOd3oy5knLRo.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/03/07/97/92/1000_F_307979267_FKF2vsIZjRuCvRMcsoCq3WS3HHBMgSvm.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/01/03/57/58/1000_F_103575831_UFdxz8TejznsskF1YGtg2eOvtkMhk4L5.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://t3.ftcdn.net/jpg/05/54/80/20/240_F_554802089_SpMpRHFjQnubBSdF3xZOo5umvO7ULPHl.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
        {user && user.displayName ? (
          <button className="Image-Feed-button">
            <Link to="/user/1/explore">
            
              <h2>Explore</h2>
            </Link>

      
          </button>
        ) : (
          <button className="Image-Feed-button" onClick={handleGoogleSignIn}>
        Log in
          </button>
        )}
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://img.freepik.com/premium-photo/large-group-cats-dogs-looking-camera-blue-background_191971-28558.jpg?w=2000",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  }
];
