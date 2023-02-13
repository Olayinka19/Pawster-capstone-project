import React from "react";
import "./Chats.css";
import Chat from "./Chat";

export default function Chats() {
  return (
    <div className="chats" >
      
      <Chat
        name="Olayinka"
        message="Tadadada"
        timestamp="40 second ago"
        profilePic="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F0a0b83c6-26af-45cd-aa8c-30b7aa5c08d4%2FOlayinka_Fakanbi.jpeg?width=180&userId=1db7092b-3ec4-4da8-985b-7b836b0a69ad&cache=v2"
      />
      <br/>
      <br/>

      <Chat
        name="Alexa"
        message="qweqweqw"
        timestamp="50 second ago"
        profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqodebrisbane.com%2Fwp-content%2Fuploads%2F2019%2F07%2FThis-is-not-a-person-2-1.jpeg&f=1&nofb=1&ipt=cb0b5bff6cc6d252456068e6f13f0c0b6ace85e91acbeb5463b8d2bb82bd7f55&ipo=images"
      />
      <br/>
      <br/>
       <Chat
        name="Abike"
        message="qweqweqw"
        timestamp="50 second ago"
        profilePic="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftheinfong.com%2Fwp-content%2Fuploads%2Fblessedone%2F2018%2F12%2F18%2Fbeautiful-girl-in-Nigeria1.jpg&f=1&nofb=1&ipt=f8244c1da2a221605c9657281ce6eb4f78d2fc349a9e14f31f461d8a331539da&ipo=images"
      />
      {/* goona pass the chat function with the info we need as props. */}
    </div>
  );
}
