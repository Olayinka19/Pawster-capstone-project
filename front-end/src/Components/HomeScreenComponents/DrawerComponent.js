import React from 'react'
import NavBar from './NavBar';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useState } from 'react';


function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)}  />
    
  return (
    <div>
      <Drawer>
        <List>
         <ListItem>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/about">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/contactUS">Contact</Link>
            </ListItemText>
          </ListItem>
          <ListItem >
            <ListItemText>
              <Link to="/support">Support</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>

    </div>
  )
}

export default DrawerComponent;
