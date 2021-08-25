import Style from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/auth/auth";
import Profile from "./components/profile/profile";

function App() {
  return (
      <div className={Style.container}>
        <BrowserRouter>
            <Switch>
                <Route path={['/', '/login']} exact>
                    <Auth />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
