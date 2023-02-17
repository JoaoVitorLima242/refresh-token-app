import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./pages/signup";
import User from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
