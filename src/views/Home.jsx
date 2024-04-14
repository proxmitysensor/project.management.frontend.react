import viteLogo from "../../public/vite.svg";
import reactLogo from "../assets/react.svg";
import {useState} from "react";
import {Button, DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {useAuth0} from "@auth0/auth0-react";
import {NavLink as RouterNavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Home = () => {
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      }
    });
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
    logout
  } = useAuth0();
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Login In</p>
        <div>
        {!isAuthenticated && (
            <Button
              id="qsLoginBtn"
              color="primary"
              className="btn-margin"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </Button>
        )}
        {isAuthenticated && (
          <UncontrolledDropdown>
            <DropdownToggle nav caret id="profileDropDown">
              <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile rounded-circle"
                width="50"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{user.name}</DropdownItem>
              <DropdownItem
                tag={RouterNavLink}
                to="/profile"
                className="dropdown-profile"
                activeClassName="router-link-exact-active"
              >
                <FontAwesomeIcon icon="user" className="mr-3" /> Profile
              </DropdownItem>
              <DropdownItem
                id="qsLogoutBtn"
                onClick={() => logoutWithRedirect()}
              >
                <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        )}
        </div>
        <div>
          {isAuthenticated && (

              <NavLink
                tag={RouterNavLink}
                to="/external-api"
                exact
                activeClassName="router-link-exact-active"
              >
                External API
              </NavLink>

          )}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default Home;