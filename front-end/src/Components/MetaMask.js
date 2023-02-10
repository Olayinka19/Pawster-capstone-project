import React from 'react'
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";


function MetaMask() {
    const [currentAccount, setCurrentAccount] = useState();
    const connectWallet = async() => {
        try {
        if(!window.ethereum) return alert ("You do not have metamask installed");
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        setCurrentAccount(accounts[0])
    } catch (error) {
        console.log(error)
        throw window.newError("no object found")
    }
}
  return (
    

    <div className='metaMask' style={{ display: 'flex', justifyContent: 'center' }}>
    
    <Card>
    <img src="https://img.freepik.com/premium-photo/3d-rendering-cryptocurrency-eth-ethereum-custom-color-coin-with-white-background_477250-85.jpg?w=1480"></img>
    <Card.Header as="h5"><h1>{!currentAccount? "Connect your Wallet" : <p>WalletID: {currentAccount}</p>}</h1></Card.Header>
      
      
      <br></br>
      <br></br>
      <Button variant="success" onClick={connectWallet} className="connect">Connect</Button>
      </Card>
      
      
    </div>
  )
}

export default MetaMask;