import React from "react";
import { GlobalStyle, Wrapper } from "../App.styled";
import Header from "../components/header/Header";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import Main from "../components/main/Main";
import PopExit from "../components/popups/PopExit/PopExit";
import Loader from "../components/Loader/loader";
import { columnsFromCardList } from "../../data";
import { Outlet } from "react-router-dom";

const MainPage = ({ loading }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/*pop-up start */}
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end */}
        <Header />
        <Loader loading={loading} />
        <Main columns={columnsFromCardList} />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MainPage;
