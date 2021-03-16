import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Products, Hats } from "../pages";

export function Routers() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/hats">Hats</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/hats">
            <Hats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
