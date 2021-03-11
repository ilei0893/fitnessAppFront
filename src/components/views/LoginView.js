import React from "react";
import "./styles/LoginView.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const LoginView = (props) => {
  const {
    name,
    displayName,
    handleSubmit,
    handleChange,
  } = props;

  return (
    <div className="form">
    <Form onSubmit={handleSubmit} name={name} >
      <Form.Group controlId="formBasicUsername">
        <Form.Label className="label">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" 
        onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        {displayName}
      </Button>
    </Form>
    </div>
    
  );
};

export default LoginView;
