import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";

import LandPage from "./pages/LandPage";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { LoginPage } from "./pages/LoginPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { current } from "./JS/actions/user";
import { useHistory } from "react-router";
import PrivateRoute from "./router/PrivateRoute";
import EditPage from "./pages/EditPage";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setLandingPageData(JsonData);
    dispatch(current());
  }, []);

  return (
    <div>
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandPage {...props} landingPageData={landingPageData} />
          )}
        />
        <PrivateRoute path="/admin" component={LoginPage} />
        <Route path="/add" component={EditPage} />
      </Switch>
    </div>
  );
};

export default App;
