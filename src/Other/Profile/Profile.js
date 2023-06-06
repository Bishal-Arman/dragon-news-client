import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName);
  const photoUrlRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(photoUrlRef.current.value);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={handleChange} defaultValue={name} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control ref={photoUrlRef} defaultValue={user.photoURL} type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        ReSubmit
      </Button>
    </Form>
  );
};

export default Profile;
