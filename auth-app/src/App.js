import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./pages/signup";
import User from "./pages/user";
import { AuthProvider } from "./context/auth";
import axios from "axios";
import { api } from "./api";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path={['/',"/login"]}>
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
