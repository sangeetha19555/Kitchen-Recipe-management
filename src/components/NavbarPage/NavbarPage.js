import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// import HomeIcon from "@mui/icons-material/Home";
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
    console.log("hello logout function");
    console.log(user);

    axios.post("/logout").then(() => {
      localStorage.removeItem("token");
      setUser(null);
      console.log("no users", user);
      history.replace("/");
    });
  };

  return (
    <Navbar className="navbar_background" expand="lg">
      <Container>
        {/* <LinkContainer></LinkContainer> */}
        <NavLink to="/" activeclassname="active">
          <Navbar.Brand href="#home">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/21/08/49/food-2085075_960_720.png"
              alt="image_cook"
              width="60px"
            />
            Meals
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <NavLink to="/" activeclassname="active">
            <HomeIcon className="navbar_top_icon" />
            Home
          </NavLink>

          <NavLink to="/homescreen" activeclassname="active">
            <HomeIcon className="navbar_top_icon" />
            search
          </NavLink> */}

          {!user && (
            <Nav className="me-auto">
              <NavLink to="/login" activeclassname="active">
                <InputIcon className="navbar_top_icon" />
                Login
              </NavLink>

              <NavLink to="/signup" activeclassname="active">
                <HowToRegIcon className="navbar_top_icon" />
                Signup
              </NavLink>
            </Nav>
          )}

          {/* <NavLink to="/my-favorites" activeclassname="active">
            Favorites
          </NavLink>
          <Nav.Item className="me-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav.Item> */}
          {/* = =================================================================================*/}
          {user && (
            <>
              <NavLink to="/my-favorites" activeclassname="active">
                Favorites
              </NavLink>
              <Nav.Item className="me-auto">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
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
