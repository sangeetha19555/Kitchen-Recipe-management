import React from "react";
import "./HomeScreen.css";
export const HomeScreen = () => {
  return (
    <div className="screen">
      <img
        style={{}}
        src="https://shtheme.com/demosd/orgafe/wp-content/uploads/2019/04/bg1.png"
        alt="homeScreen"
      />
      <h2 class="text screen">
        <span style={{ color: "#fcdb5a" }}>Quality </span>
        <span style={{ color: "#db2985" }}> food is the</span>
        <span style={{ color: "#72aa41" }}> most important</span>
        <span style={{ color: "#f2a137" }}> thing in our</span>
        <span style={{ color: "#4fb1c9" }}> life</span>
      </h2>
      {/* font-family: Storytella; font-weight: 400; text-transform: none; */}
      {/* <Nav className="me-auto">
        <ul className="nav_bar">
          <li>
            <NavLink to="/" activeclassname="active">
              <HomeIcon className="navbar_top_icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/homescreen" activeclassname="active">
              <HomeIcon className="navbar_top_icon" />
              search
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/login" activeclassname="active">
                  <InputIcon className="navbar_top_icon" />
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup" activeclassname="active">
                  <HowToRegIcon className="navbar_top_icon" />
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </Nav> */}
    </div>
  );
};
