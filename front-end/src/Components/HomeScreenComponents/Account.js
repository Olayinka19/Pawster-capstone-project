import { React } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form } from "../Forms/Form";
import Button from 'react-bootstrap/Button';



function Account() {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      alert("You are now logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
      <div style={{display: "flex", justifyContent: 'center'}}>
        <h2>Welcome, {user && user.displayName}!</h2>
        <img src={user && user.photoURL} className="image-container" alt="PFP"></img>

      <h2>Email: {user && user.email}</h2>
      <Button>
        <a href="/">BACK</a>
      </Button>
      {/* </Form> */}
    </div>
  );
}

export default Account;
