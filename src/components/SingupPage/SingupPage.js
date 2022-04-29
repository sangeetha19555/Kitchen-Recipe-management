import axios from "../../Axios";
import React, { useContext, useState } from "react";
// import { Button, Form } from "react-bootstrap";
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
    <div>
      <div className="login_melon_img Sign_slider-01">
        <img src="/images/signup-img-1.png" alt="signup_img1" />
      </div>
      <div className="login_melon_img Sign_slider-04">
        <img src="/images/signup-img-4.png" alt="signup_img4" />
      </div>
      <div className="login_melon_img Sign_slider-03">
        <img src="/images/signup_img-3.png" alt="sign_image3" />
      </div>
      <div className="title">
        <h2 className="titleText mt-3">
          <span>S</span>ign Up
        </h2>
      </div>
      <div className="LoginBox">
        <div className="Logincontainer">
          {/* image container */}

          <div className="contactInfo signUpContainer_img"></div>

          {/* form container */}
          <div className="contactForm">
            <h2>Sign Up Now</h2>

            <form onSubmit={handleSignup}>
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
                  {/* <input type="submit" /> */}
                  <button className="signup_button" type="submit">
                    Sign Up
                  </button>
                </div>
                <div className="login_melon_img Sign_slider-02 ">
                  <img
                    src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/deal.png"
                    alt="signup_img2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
