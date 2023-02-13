import React from "react";
import { Avatar } from "@mui/material";
import "./Chat.css";
import {Link} from "react-router-dom"
import Stack from '@mui/material/Stack';
import Card from 'react-bootstrap/Card';


export default function Chat({ name, message, profilePic, timestamp }) {
  return (
      <div className="chat" style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
    <Link to={`/chats/${name}`}>
        <Avatar className="chat_image" alt={name} src={profilePic} />
        <Card.Header as="h1">Chats</Card.Header>
      <Card.Body>
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
          <img width="40px" height="40px" src={profilePic} />
        </div>
        <p className="chat_timestamp">{timestamp}</p>
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://as1.ftcdn.net/v2/jpg/04/59/61/68/1000_F_459616813_kCQev7harCEOs3O4wQV7covodTK0gOzt.jpg" />
      <Avatar alt="Travis Howard" src="https://as1.ftcdn.net/v2/jpg/04/39/67/84/1000_F_439678400_5HFfdBqNxLPjYiWDx6zHfpAbYzelVsuQ.jpg" />
      <Avatar alt="Cindy Baker" src="https://as2.ftcdn.net/v2/jpg/05/48/69/07/1000_F_548690734_AiH9pHhfnVfrmgyzhYaHx1wGPHtTyJR8.webp" />
    </Stack>
    
    </Card.Body>
    </Link>
    </Card>
      </div>
    
  );
}
