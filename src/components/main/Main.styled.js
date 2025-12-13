import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

`;


export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

 

  @media screen and (max-width: 1200px) {
    width: 100%;

  }
`;

