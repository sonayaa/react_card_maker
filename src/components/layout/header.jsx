import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Style from "./layout.module.css";

const Header = ({ onLogin, authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.onLogout();
  };
  
  useEffect(() => {
    authService.onAuthChange((user) => { // 2.이부분이 이해가 안갔었음! 다시 확인하자.
      if (!user) {
          history.push('/');
      }
    });
  });

  return (
    <header>
      <h1>Business Card Maker</h1>
      {onLogin && (
        <button className={Style.logout_btn} onClick={onLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
