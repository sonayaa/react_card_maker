import React, { memo } from "react";
import Style from "./layout.module.css";

const Header = memo(({ onLogout }) => (
  <header>
    <h1>Business Card Maker</h1>
    {onLogout && (
      <button className={Style.logout_btn} onClick={onLogout}>
        Logout
      </button>
    )}
  </header>
));

export default Header;
