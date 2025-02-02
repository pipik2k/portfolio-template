import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const MainPage: React.FC = () => {
  return (
    <GamesContainer>
      {games.map((game, index) => (
        <>
        <Game key={index} game={game} />
        <Seperator/>
        </>
      ))}
    </GamesContainer>
  );
};

export default MainPage;
