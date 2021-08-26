import React, { useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Style from "./login.module.css";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToProfile = (userId) => {
    history.push({
      pathname: "/profile",
      state: { id: userId },
    });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToProfile(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => { // 이부분이 이해가 안갔었음! 다시 확인하자.
      user && goToProfile(user.uid);
    });
  });

  return (
    <>
      <div className={Style.modal}>
        <Header authService={authService}/>
        <section className={Style.auth}>
          <h2>Login</h2>
          <button onClick={onLogin}>Google</button>
          <button onClick={onLogin}>Github</button>
        </section>
        <Footer />
      </div>
      <div className={Style.dim}></div>
    </>
  );
};

export default Login;
