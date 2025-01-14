import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/HomeScreenComponents/NavBar';
import Footer from './Components/HomeScreenComponents/Footer';
import Account from './Components/HomeScreenComponents/Account';
// import Login from './Components/HomeScreenComponents/Login';
import { AuthContextProvider } from "./Context/AuthContext";
import Login from './Components/Login';
import MetaMask from '../src/Components/MetaMask';
import Affiliate from './Components/HomeScreenComponents/Affiliate';

// import { useState } from 'react';
// import { Button } from 'react-bootstrap';

// Home Routes 
import AboutPage from './Components/HomeScreenComponents/AboutPage';
import ContactUs from './Components/HomeScreenComponents/ContactUs';
import Feed from './Components/HomeScreenComponents/Feed';
import Support from './Components/HomeScreenComponents/Support';
// import ShelterStartingPage from './Components/HomeScreenComponents/';
// Shelter Route
// import ShelterStartingScreen from './Pages/ShelterStartingScreen';
// import Animation from "../src/Animation";
// import ShelterForm from '../src/Components/Forms/ShelterForm';
// import EditPetForm from '../src/Components/Forms/EditPetForm';
import ShelterStartingScreen from './Pages/ShelterStartingScreen';
import UserForm from './Components/Forms/UserForm';
import PetForm from './Components/Forms/PetForm';
import PetBlog from './Pages/PetBlog';

import { useState} from 'react';
import Button from 'react-bootstrap/Button';

// User Route
import UserStartingScreen from "../src/Pages/UserStartingScreen"
import UserLikedPets from './Components/User Pages/UserLikedPets';
import TinderCards from "../src/Components/User Pages/PetFinderAPI/PetFinderAPI"
import Chats from "../src/Components/User Pages/Chats"
import ChatScreen from './Components/User Pages/ChatScreen';
import ContactForm from './Components/HomeScreenComponents/ContactForm';
import DocsNeeded from './Components/OLD-newUserForm/DocsNeeded';
import ShelterLocation from './Components/User Pages/ShelterLocation';
function App() {


    return (
      <div className="App">
      <AuthContextProvider>
        <Router>
          {/* Keep NavBar so each diff page keeps it */}
          <NavBar />

          <Routes>
              {/* Home Routes */}
                <Route path="/" element={<Feed />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/support" element={<Support />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/chats' element={<Chats />} />
                <Route path='/PetBlog' element={<PetBlog />} />
                <Route path='/MetaMask' element={<MetaMask />} />
    
                
                <Route path="/login" element={<Login />} />
                <Route path="/ShelterLocation" element={<ShelterLocation />} />
              
                <Route path='/account' element={<Account/>} />
                <Route path='/contactForm' element={<ContactForm/>} />
                <Route path='/userForm' element={<UserForm/>} />
                <Route path='/petForm' element={<PetForm/>} />
                {/* <Route path='/ShelterStartingScreen' element={<ShelterScreen/>} /> */}
                <Route path='/docsNeeded' element={<DocsNeeded/>} />
                <Route path='/affiliate' element={<Affiliate/>} />

              {/* Shelter Routes */}
                <Route path="/shelter/*" element={ <ShelterStartingScreen />} />

              {/* User Routes */}
              {/* <Route path="/userForm/:id" element={ <UserForm />} /> */}
              <Route path="/user/:id/explore" element={ <TinderCards />} />
              <Route path="/user/:id/pets" element={<UserLikedPets />} />
              <Route path="/chats" element={<Chats />} />
            

              {/*  */}
              <Route path="/chat" element={<ChatScreen/>} />
            

          </Routes>
        </Router>
    </AuthContextProvider>
        {/* Keep Footer for all other screens? */}
        <Footer />
      </div>
    )
  }



  export default App;



