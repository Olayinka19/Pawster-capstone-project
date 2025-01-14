import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../Context/AuthContext';
import { Button } from 'react-bootstrap';
// import Animation from '../Animation';
import Nav from 'react-bootstrap';


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
      navigate("/Account")
    } else  {
      navigate("/Login")
    }

  }, [user]);

  return (
    <div className='login-content' style={{ display: 'flex', justifyContent: 'center' }}>

<Card>
      <Card.Header as="h5">Sign In</Card.Header>
      <Card.Body>
        <Card.Title>Create an Account </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary"><GoogleButton onClick={handleGoogleSignIn} /></Button>

<Button href="/user/1/explore" >Explore Page</Button>
      </Card.Body>
    </Card>
      
      


    </div>
  );
};