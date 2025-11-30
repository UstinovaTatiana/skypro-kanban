import styled from "styled-components";

export const ColumnWrapper = styled.div`
  display: block;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & > p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  & > * {
    animation: card-animation 500ms linear;
  }
  @media screen and (max-width: 495px) {
    flex-direction: row;
  }
`;
