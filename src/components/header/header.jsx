import React, { useState } from "react";
import "./Header.css";
import PopUser from "../popups/PopUser/PopUser";

export default function Header() {
  const [userOpen, setUserOpen] = useState(false);

  const toggleUser = (e) => {
    e && e.preventDefault();
    setUserOpen((s) => !s);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>{" "}
            <a
              href="#user-set-target"
              className="header__user _hover02"
              onClick={toggleUser}
            >
              {" "}
              Ivan Ivanov
            </a>
            <PopUser
              open={userOpen}
              onClose={() => setUserOpen(false)}
              name="Ivan Ivanov"
              email="ivan.ivanov@gmail.com"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
