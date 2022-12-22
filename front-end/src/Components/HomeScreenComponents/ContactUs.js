import React from "react";
import {
  Container,
  Button,
  // Box,
  Stack,
  // FormControl,
  // Select,
  // MenuItem,
  // TextField,
  // Input,
  // InputLabel,
  // FormHelperText,
} from "@mui/material";
import EmailIcon from "@material-ui/icons/Email";
import ContactDevCards from "./ContactDevCards";
// import ContactForm from "./ContactForm";
import "./ContactUs.css";

export default function ContactUs() {
  const developers = [
  
    {
      name: "Olayinka Fakanbi",
      email: "olayinkafakanbi@pursuit.org",
      photo:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F312b1033-01d7-4b1c-a075-64ca0c79b05c%2FOlayinka_Fakanbi.jpg?id=a5b8ac40-ed54-464d-9702-7dd5c24a0e22&table=block&spaceId=e2735e9b-8fe9-4c16-bdc1-be142cd1014e&width=2000&userId=1c56301b-4ffe-419f-b2c0-5424d42c657c&cache=v2",
      github: "https://github.com/Olayinka19",
      linkedin: "http://linkedin.com/in/olayinka-fakanbi-2a46a6229",
      codetrack:"https://pursuit.codetrack.dev/fellow/263"
    },
  ];
  return (
    <>
      {/* <br />
      <br /> */}
      <br />
      <br />
      <br />
      <Container align="center" sx={{ p: '4%' }}>
        <br />
        <h3> Contact Me </h3>
        <h6>Got something you want to talk about? Contact or email me and I promise to get back to you as soon as we can.</h6>
      </Container>
      <Container sx={{ px: "5%" }}>
        <ContactDevCards />
      </Container>


      <Stack direction='column' spacing={2} align="center" sx={{ p: '5%' }}>
        <div className="emailBtn-column">
          <h3>Help / Support</h3>
          <p>
            For all things technical and app-related. Send us an email:{" "}
            <Button
              variant="outlined"
              href="mailto:pawster.app@gmail.com?subject=Pawster App - Technical Concern"
            >
              <EmailIcon />
            </Button>
          </p>
        </div>


        <div className="address-div">

          <h3 className="main-heading">Headquaters</h3>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.866474495898!2d-73.94411554933569!3d40.74296354355667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592c26359e19%3A0x17661f3fc4273c31!2s47-10%20Austell%20Pl%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1668983117259!5m2!1sen!2sus"
            width="100%"
            height="auto"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            title="Headquaters-map"
          ></iframe>
          <div className="text-center p-4 ">
            <p>47-10 Austell Pl, 2nd floor</p>
            <p>Long Island City, NY 11101</p>
            <p>PH#: (123) 456-7890</p>
          </div>

        </div>

      </Stack>

    </>
  );
}
