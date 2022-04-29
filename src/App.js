import { HomePage } from "./components/HomePage/HomePage";
import { NavbarPage } from "./components/NavbarPage/NavbarPage";
import { MyContext } from "./Context/Context";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./components/404/ErrorPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { SingupPage } from "./components/SingupPage/SingupPage";
import { HomeScreen } from "./components/HomePage/HomeScreen";
import { useContext, useEffect } from "react";
import axios from "./Axios";
// import "./App.css";
import { Favorites } from "./components/Favorites/Favorites";
// import { SampleLogin } from "./components/SampleLogin";

function App() {
  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({ data }) => setUser(data));
  }, [setUser]);
  return (
    <>
      <NavbarPage />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/homescreen" exact>
          <HomeScreen />
        </Route>

        {!user && (
          <>
            <Route path="/login">
              <LoginPage />
              {/* <SampleLogin /> */}
            </Route>

            <Route path="/signup">
              <SingupPage />
            </Route>
          </>
        )}

        {user && (
          <Route exact path="/my-favorites">
            <Favorites />
          </Route>
        )}

        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
