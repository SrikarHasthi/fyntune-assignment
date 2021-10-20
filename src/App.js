import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddShop from "./components/addShop";
import Navbar from "./components/navbar";
import ViewShops from "./components/viewShops";
let App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/viewShops">
            <ViewShops />
          </Route>
          <Route path="/addShop">
            <AddShop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
