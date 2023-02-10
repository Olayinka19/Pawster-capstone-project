import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext';
import { Button } from 'react-bootstrap';


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
    if (user != null && user.displayName) {
      console.log(user)
      navigate("/account")
    } 
    // else {
    //   navigate("/login")
    // }

  }, [user]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>

<Card>
      <Card.Header as="h5">Sign In</Card.Header>
      <Card.Body>
        <Card.Title>Create an Account </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary"><GoogleButton onClick={handleGoogleSignIn} /></Button>
      </Card.Body>
    </Card>
      
      


    </div>
  );
};