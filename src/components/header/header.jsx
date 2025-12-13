import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBlock,
  LogoLight,
  LogoDark,
  HeaderNav,
  HeaderBtnNew,
  HeaderUser,
} from "./header.styled";
import PopUser from "../popups/PopUser/PopUser";

export default function Header({ onLogout }) {
  console.log("Header получил onLogout:", typeof onLogout);
  const [userOpen, setUserOpen] = useState(false);

  const toggleUser = (e) => {
    e && e.preventDefault();
    setUserOpen((s) => !s);
  };

  return (
    <HeaderWrapper className="header">
      <HeaderContainer className="container">
        <HeaderBlock className="header__block">
          <LogoLight className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </LogoLight>
          <LogoDark className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>
          <HeaderNav className="header__nav">
            <HeaderBtnNew id="btnMainNew" className="_hover01">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnNew>

            <HeaderUser
              href="#user-set-target"
              className="header__user _hover02"
              onClick={toggleUser}
            >
              Ivan Ivanov
            </HeaderUser>

            <PopUser
              open={userOpen}
              onClose={() => setUserOpen(false)}
              onLogout={onLogout}
              name="Ivan Ivanov"
              email="ivan.ivanov@gmail.com"
            />
          </HeaderNav>
        </HeaderBlock>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
