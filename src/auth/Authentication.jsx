import React from "react";
import { ProvideAuth, useAuth } from "../context/AuthContext";
import UserList from "../containers/UserList";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import CreateAccount from "../pages/CreateAccount";



export default function Authentication() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/recoverypassword">
              <RecoveryPassword />
            </Route>
            <PrivateRoute path="/userlist">
              <UserList/>
            </PrivateRoute>
            <PrivateRoute path="/create">
              <CreateAccount/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}


function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      <button className="logoutbutton" 
        onClick={() => {
          auth.signout(() => history.push("/login"));
        }}
      >
        Sign out
      </button>
    </p>
  ) :""
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
