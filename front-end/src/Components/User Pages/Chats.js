import React from "react";
import "./Chats.css";
import Chat from "./Chat";
import { Button } from 'react-bootstrap';

export default function Chats() {
  return (
    <div className="chats" >
      
      <Chat
        name="Olayinka"
        message="Pet adoption can be a life-changing experience for both you and the pet you adopt. When you adopt a pet, you are giving them a second chance at a happy life. Many animals in shelters are there due to no fault of their own, such as the loss of their owner or changes in their family's circumstances. By giving these animals a new home, you're not only changing their lives but also your own.

"
        timestamp="40 second ago"
        profilePic="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F0a0b83c6-26af-45cd-aa8c-30b7aa5c08d4%2FOlayinka_Fakanbi.jpeg?width=180&userId=1db7092b-3ec4-4da8-985b-7b836b0a69ad&cache=v2"
      />
      <br/>
      <br/>

      <Chat
        name="Alexa"
        message="Pets bring love, joy, and companionship into our lives, and they deserve a warm and loving home. If you're considering adding a furry friend to your family, pet adoption is an excellent option to consider. By adopting a pet, you can help save a life, and get a new best friend in return."
        timestamp="50 second ago"
        profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqodebrisbane.com%2Fwp-content%2Fuploads%2F2019%2F07%2FThis-is-not-a-person-2-1.jpeg&f=1&nofb=1&ipt=cb0b5bff6cc6d252456068e6f13f0c0b6ace85e91acbeb5463b8d2bb82bd7f55&ipo=images"
      />
      <br/>
      <br/>
       <Chat
        name="Abike"
        message="Adopting a pet can also be a cost-effective option compared to buying one from a breeder or pet store. Many shelters have already vaccinated and spayed or neutered the animals, saving you money on these expenses. Additionally, when you adopt a pet, you'll be helping to support local animal shelters, which is a great way to give back to your community."
        timestamp="50 second ago"
        profilePic="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheinfong.com%2Fwp-content%2Fuploads%2Fblessedone%2F2018%2F12%2F18%2Fbeautiful-girl-in-Nigeria1.jpg&f=1&nofb=1&ipt=f8244c1da2a221605c9657281ce6eb4f78d2fc349a9e14f31f461d8a331539da&ipo=images"
      />
      <Chat
        name="John"
        message="When you adopt a pet, you're not just getting a new friend, you're also taking on a significant responsibility. Caring for a pet can be a big commitment, both in terms of time and money. You'll need to provide food, water, shelter, and medical care for your new companion. It's essential to be prepared for these responsibilities before bringing a pet into your home."
        timestamp="50 second ago"
        profilePic="https://as1.ftcdn.net/v2/jpg/02/26/85/74/1000_F_226857449_JLYphmWRrTvxkHI3x7NewMxIqDmvW6Ig.jpg"
      />
      <a href="/Affiliate"><Button variant="warning"><img width="40px" height="40px"  src="https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5326_-_Amazon-512.png"></img>Pets Store!</Button></a>
      {/* goona pass the chat function with the info we need as props. */}
    </div>
  );
}
