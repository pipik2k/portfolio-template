// src/Components/GameInfo.tsx

import React from "react";
import styled from "styled-components";
import { Game } from "../types";

const GameInfoContainer = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 24px;
  margin-top: 24px;
`;

const GameTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 16px 0;
  color: #fff;
`;

const GameDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 24px;
`;

const InfoTable = styled.div`
  display: grid;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 12px;
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: #4da3ff;
  min-width: 120px;
`;

const InfoValue = styled.span`
  color: #ccc;
  flex: 1;
`;

const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const GenreTag = styled.span`
  background: #1e3a5f;
  color: #6db3ff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
`;

interface GameInfoProps {
  game: Game;
}

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  return (
    <GameInfoContainer>
      <GameTitle>{game.name}</GameTitle>
      
      {/* Sử dụng detailedInfo.overview thay vì description */}
      {game.detailedInfo?.overview && (
        <GameDescription>{game.detailedInfo.overview}</GameDescription>
      )}

      <InfoTable>
        {/* My Role */}
        {game.detailedInfo?.myRole && (
          <InfoRow>
            <InfoLabel>My Role:</InfoLabel>
            <InfoValue>{game.detailedInfo.myRole}</InfoValue>
          </InfoRow>
        )}

        {/* Engine */}
        {game.engine && (
          <InfoRow>
            <InfoLabel>Engine:</InfoLabel>
            <InfoValue>{game.engine}</InfoValue>
          </InfoRow>
        )}

        {/* Platforms */}
        <InfoRow>
          <InfoLabel>Platforms:</InfoLabel>
          <InfoValue>{game.platforms.join(", ")}</InfoValue>
        </InfoRow>

        {/* Duration */}
        {game.detailedInfo?.duration && (
          <InfoRow>
            <InfoLabel>Duration:</InfoLabel>
            <InfoValue>{game.detailedInfo.duration}</InfoValue>
          </InfoRow>
        )}

        {/* Team Size */}
        {game.detailedInfo?.teamSize && (
          <InfoRow>
            <InfoLabel>Team Size:</InfoLabel>
            <InfoValue>{game.detailedInfo.teamSize}</InfoValue>
          </InfoRow>
        )}

        {/* Genres */}
        {game.genres && game.genres.length > 0 && (
          <InfoRow>
            <InfoLabel>Genres:</InfoLabel>
            <GenreList>
              {game.genres.map((genre, i) => (
                <GenreTag key={i}>{genre}</GenreTag>
              ))}
            </GenreList>
          </InfoRow>
        )}

        {/* Source Link */}
        {game.source && (
          <InfoRow>
            <InfoLabel>Source:</InfoLabel>
            <InfoValue>
              <a
                href={game.source.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4da3ff", textDecoration: "none" }}
              >
                {game.source.name}
              </a>
            </InfoValue>
          </InfoRow>
        )}
      </InfoTable>
    </GameInfoContainer>
  );
};

export default GameInfo;