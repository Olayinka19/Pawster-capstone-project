import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./ImageFeed.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import { Googlebutton } from 'react-google-button'
import { UserAuth } from "../../Context/AuthContext";
import Carousel from "react-bootstrap/Carousel";

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
      navigate("/user/1/explore");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="outter-div" sx={{ backgroundColor: "black" }}>
      <div className="splash-image">
        <h1>Find the right pet for you</h1>
       

        <Carousel fade>
      <Carousel.Item interval={2000}>
        <img width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/05/59/53/86/1000_F_559538674_OgqSqQeIXx0sCUPv7kzS4umW8szBu2SF.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        borderradius = "20x%"
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/00/81/18/78/1000_F_81187840_wx117MR3aq8OrquMHI5HZgFqgL8IsoOe.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
       width="480px" height="320px" 
       border-radius = "20x%"
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/01/56/09/98/1000_F_156099814_8CC5cxiwLK0bwuT1AcneSewS1KuJqs3p.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        border-radius = "20x%"
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/05/59/53/86/1000_F_559538628_ionlXbmGsNWadwZfp5CDTKkrtWLIUaz8.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/01/88/22/34/1000_F_188223479_kHnLFTv4qozVqMvjAFPkPwmzsTB1JZtu.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as2.ftcdn.net/v2/jpg/01/70/84/85/1000_F_170848578_lLypI0m2DdsAfd7FwfSTc55hlhJAjaUK.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as2.ftcdn.net/v2/jpg/00/65/17/41/1000_F_65174116_67t4ud8nVhcFPNKEKuKSHuwu9tLKp80l.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/01/83/61/06/1000_F_183610659_eN5pcZBcViM96HDesCDK8zEJH6gMbpr5.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/01/11/50/80/1000_F_111508056_zxXkQRYgpPbyKNdYYdgTdUVg6Q4BBbJ1.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/04/60/60/44/1000_F_460604425_eE3oyjq8zxcrGzwd6ixOJzvTBQTkdDYs.jpg"
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
        width="480px" height="320px" 
          className="first-image" 
          src="https://as1.ftcdn.net/v2/jpg/02/03/29/40/1000_F_203294034_N0LDRmmncjj7pkzw4sHkquZBhGLyjWnw.jpg"
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
    img: "https://bestfriends.org/sites/default/files/2022-08/DrBlissShiba8725SAx2.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  }
];
