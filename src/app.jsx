import Style from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Profile from "./components/profile/profile";

function App({ FileBtn, authService, cardRepository }) {
  return (
    <div className={Style.app}>
      <div className={Style.container}>
        <BrowserRouter>
          <Switch>
            <Route path={["/", "/login"]} exact>
              <Login authService={authService} />
            </Route>
            <Route path="/profile">
              <Profile authService={authService} cardRepository={cardRepository} FileBtn={FileBtn}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
