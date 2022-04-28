import axios from "../../Axios";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill the Form");
    }
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        setUser(data);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={email}
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
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginPage;
