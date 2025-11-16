import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
`;

export const HeaderContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  position: relative;
  padding: 0 10px;
  top: 0;
  left: 0;
`;

// Логотипы: показывать один из них в зависимости от ширины
export const LogoLight = styled.div`
  img {
    width: 85px;
  }
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const LogoDark = styled.div`
  img {
    width: 85px;
  }
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Кнопка создания новой задачи
export const HeaderBtnNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    z-index: 3;
    border-radius: 4px;
    margin-right: 0;
  }
`;

// Логин/пользователь
export const HeaderUser = styled.a`
  height: 20px;
  width: 84px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

// Остальные элементы можно держать в существующих местах, но можно переиспользовать и логически разделить
export const LogoAnchor = styled.a`
  display: inline-block;
`;

// По желанию: общий стиль для контейнера (если хочется унифицировать)
export const InlineBlock = styled.div`
  display: inline-block;
`;
