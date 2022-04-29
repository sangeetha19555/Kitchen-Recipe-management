import axios from "../../Axios";
import React, { useContext, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
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
        alert("Login successfully");
        setUser(data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials  ");
      });
  };
  return (
    <div>
      <div className="login_melon_img slider-01">
        <img
          src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/about1.png"
          alt="orange"
        />
      </div>
      <div className="login_melon_img slider-03">
        <img
          src="https://cdn.picpng.com/pomegranate/pomegranate-hd-25939.png"
          alt="pomegranate"
        />
      </div>
      <div className="login_melon_img slider-04">
        <img
          src="https://www.pinclipart.com/picdir/big/524-5244681_carrot-clipart-wortel-single-vegetables-clip-art-png.png"
          alt="carrot"
        />
      </div>
      <div className="title">
        <h2 className="titleText mt-3">
          <span>L</span>ogin Page
        </h2>
      </div>

      <div className="LoginBox">
        <div className="Logincontainer">
          {/* image container */}

          <div className="contactInfo"></div>
          {/* form container */}
          <div className="contactForm">
            <h2>Login to your account to add your favorites recpies</h2>
            <form onSubmit={handleLogin}>
              <div className="formBox">
                <div className="inputBox w100">
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span>Enter Email</span>
                </div>

                <div className="inputBox w100">
                  <input
                    type="text"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <span>Enter password</span>
                </div>

                <div className="inputBox w100">
                  <button className="signup_button" type="submit">
                    Login
                  </button>
                </div>
                <div className="login_melon_img slider-02">
                  <img
                    src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/sl1.png"
                    alt="melon"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // <Form onSubmit={handleLogin}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       className="inputBox w100"
    //       type="email"
    //       placeholder="Enter email"
    //       required
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Password"
    //       required
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">
    //     Login
    //   </Button>
    // </Form>
  );
};

export default LoginPage;
