import React from 'react';
import { sendMail } from '../../Functions/mailFunctions';
import {Grid} from '@mui/material'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function ContactForm() {
  return (
        <>
            <Grid>
            
            {/* <form onSubmit={sendMail} className="contact-Form">
                <label>Full Name: {" "}</label>
                <input name="fullName" type="text" placeholder="Enter Your Full Name"></input>
                <br />

                <label>Email: {" "}</label>
                <input name="email" type="email" placeholder="Enter email" ></input>
                <br />

                <label>Subject: {" "}</label>
                <input name="subject" type="text" placeholder="Enter Subject Line" ></input>
                <br />
                <label>Message: {" "} </label>
                <textarea name="message" placeholder="Enter message" ></textarea>
                <br />
                <button>Submit</button>
            </form> */}
            <Form onSubmit={sendMail}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
        <Form.Text className="text-muted">
          We'll never share your Name with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Subject:</Form.Label>
        <Form.Control type="email" placeholder="Enter Subject Line" />
      </Form.Group>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >Message: </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Enter Message">
        <Form.Control
          as="textarea"
          placeholder="Enter Message"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Grid>

        </>
    )
}
