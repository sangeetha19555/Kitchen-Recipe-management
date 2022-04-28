import axios from "../../Axios";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";

export const SingupPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);
  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill the Form");
    }
    axios
      .post("/users", { email, password })
      .then(({ data }) => {
        setUser(data);
        localStorage.setItem("token", data.token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleSignup}>
      <h3>Signup</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
