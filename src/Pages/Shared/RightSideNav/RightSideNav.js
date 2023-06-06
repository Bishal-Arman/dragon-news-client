import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCaredoul from "../BrandCaresoul/BrandCaredoul";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleLogIn}
          className="mb-2"
          variant="outline-primary"
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Finds us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BrandCaredoul></BrandCaredoul>
      </div>
    </div>
  );
};

export default RightSideNav;
