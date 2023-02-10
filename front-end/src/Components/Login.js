import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Login() {


  
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      alert("Welcome to the Sign In Page")

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (user) {
      console.log(user)
      navigate("/user/1/explore")
    } 
    // else {
    //   navigate("/login")
    // }

  }, [user]);

  return (
    <div>

      <div className='login'>
        <h3>Log In </h3>
       <GoogleButton onClick={googleSignIn} />
       <br></br>
       <Button><Link to="/user/1/explore"/>Explore Pets</Button>
      </div>
      
      


    </div>
  );
};