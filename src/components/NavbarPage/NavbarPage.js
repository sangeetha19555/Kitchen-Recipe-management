import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import InputIcon from "@mui/icons-material/Input";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
// import LogoutIcon from "@mui/icons-material/Logout";
import "./NavbarPage.css";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import axios from "../../Axios";
import { useHistory } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

export const NavbarPage = () => {
  const history = useHistory();
  const { user, setUser } = useContext(MyContext);

  const handleLogout = () => {
    // console.log("hello logout function");
    // console.log(user);

    axios.post("/logout").then(() => {
      localStorage.removeItem("token");
      setUser(null);
      // console.log("no users", user);
      history.replace("/");
    });
  };

  return (
    <Navbar className="navbar_background" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png"
              alt="image_cook"
              width="60px"
            />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <NavLink
            to="/home"
            activeclassname="active"
            className="header-text margin-top30"
          >
            <HomeIcon className="navbar_top_icon" />
            Home
          </NavLink>

          {!user && (
            <Nav className="me-auto">
              <NavLink
                to="/login"
                activeclassname="active"
                className="header-text"
              >
                <InputIcon className="navbar_top_icon" />
                Login
              </NavLink>

              <NavLink
                to="/signup"
                activeclassname="active"
                className="header-text"
              >
                <HowToRegIcon className="navbar_top_icon" />
                Signup
              </NavLink>
            </Nav>
          )}

          {/* = =================================================================================*/}
          {user && (
            <>
              <NavLink
                to="/my-favorites"
                activeclassname="active"
                className="header-text"
              >
                <InputIcon className="navbar_top_icon" />
                Favorites
              </NavLink>

              <Nav.Item className="me-auto ">
                <Nav.Link
                  onClick={handleLogout}
                  className="header-text"
                  style={{ paddingLeft: "0px" }}
                >
                  <InputIcon className="navbar_top_icon" />
                  Logout
                </Nav.Link>
              </Nav.Item>
            </>
          )}
          {/* = =================================================================================*/}
          {/* <Nav.Item className="me-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav.Item> */}

          {/* {user && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
