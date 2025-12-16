// src/pages/GameDetail.tsx

import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { games } from "../data";

/* =======================
    LAYOUT
======================= */

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #121212;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #4da3ff;
  text-decoration: none;
  font-size: 16px;
  margin-bottom: 32px;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(-4px);
  }
`;

/* =======================
    HEADER
======================= */

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1a1a1a;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Genre = styled.span`
  background: #1e3a5f;
  color: #6db3ff;
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2a2a2a;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #3a3a3a;
    transform: translateY(-2px);
  }
`;

/* =======================
    MEDIA GALLERY
======================= */

const MediaSection = styled.div`
  margin-bottom: 48px;
`;

const MainMedia = styled.div`
  width: 100%;
  height: 600px;
  background: black;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Youtube = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: black;
`;

const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
`;

const Thumbnail = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100px;
  background: black;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${props => props.active ? '#4da3ff' : 'transparent'};
  transition: all 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #4da3ff;
    transform: scale(1.05);
  }
`;

/* =======================
    CONTENT SECTIONS
======================= */

const Section = styled.div`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 0 0 24px 0;
  color: #fff;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 12px;
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const InfoCard = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
`;

const InfoLabel = styled.div`
  font-size: 12px;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const InfoValue = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

/* =======================
    CONTRIBUTIONS
======================= */

const ContributionsList = styled.div`
  display: grid;
  gap: 24px;
`;

const ContributionCard = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #0e0e0e 100%);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  transition: all 0.3s;

  &:hover {
    border-color: #4da3ff;
    transform: translateX(8px);
  }
`;

const ContributionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const ContributionIcon = styled.span`
  font-size: 32px;
`;

const ContributionTitle = styled.h3`
  font-size: 20px;
  margin: 0;
  color: #fff;
`;

const ContributionDescription = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: #bbb;
  margin: 0;
`;

/* =======================
    TECHNICAL HIGHLIGHTS
======================= */

const TechHighlightCard = styled.div`
  background: #0e0e0e;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #2a2a2a;
  margin-bottom: 24px;
`;

const TechTitle = styled.h3`
  font-size: 20px;
  color: #4da3ff;
  margin: 0 0 16px 0;
`;

const TechList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 8px;
  }
`;

/* =======================
    LISTS
======================= */

const SimpleList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 12px;
  }
`;

/* =======================
    COMPONENT
======================= */

const GameDetail: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const gameIndex = parseInt(index || "0");
  const game = games[gameIndex];
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  // Debug log
  console.log("Route Index:", index);
  console.log("Game Index:", gameIndex);
  console.log("Game:", game?.name);

  if (!game) {
    return (
      <Page>
        <Container>
          <h1>Game not found</h1>
          <BackButton to="/">← Back to Portfolio</BackButton>
        </Container>
      </Page>
    );
  }

  const selectedMedia = game.media[selectedMediaIndex];
  const detailInfo = game.detailedInfo;

  return (
    <Page>
      <Container>
        <BackButton to="/">← Back to Portfolio</BackButton>

        {/* HEADER */}
        <Header>
          <Title>{game.name}</Title>

          {/* Meta Information */}
          <MetaInfo>
            <MetaItem>🎮 {game.engine}</MetaItem>
            {detailInfo?.duration && (
              <MetaItem>⏱️ {detailInfo.duration}</MetaItem>
            )}
            {detailInfo?.teamSize && (
              <MetaItem>👥 {detailInfo.teamSize}</MetaItem>
            )}
          </MetaInfo>

          {/* Genres */}
          <Genres>
            {game.genres.map((genre, i) => (
              <Genre key={i}>{genre}</Genre>
            ))}
          </Genres>

          {/* Store Links */}
          {game.links && game.links.length > 0 && (
            <Links>
              {game.links.map((link, i) => (
                <StoreLink
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={link.source} alt="Store" />
                  <span>
                    {link.source.includes('github') ? 'View on GitHub' :
                     link.source.includes('itch') ? 'Play on Itch.io' :
                     'Download on Google Play'}
                  </span>
                </StoreLink>
              ))}
            </Links>
          )}
        </Header>

        {/* MEDIA GALLERY */}
        <MediaSection>
          <MainMedia>
            {selectedMedia.type === "youtube" ? (
              <Youtube
                src={`${selectedMedia.source}?rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={game.name}
                loading="eager"
              />
            ) : (
              <GameImage src={selectedMedia.source} alt={game.name} />
            )}
          </MainMedia>

          {game.media.length > 1 && (
            <ThumbnailGrid>
              {game.media.map((media, index) => (
                <Thumbnail
                  key={index}
                  active={index === selectedMediaIndex}
                  onClick={() => setSelectedMediaIndex(index)}
                >
                  {media.type === "youtube" ? (
                    <img
                      src={`https://img.youtube.com/vi/${media.source.split('/').pop()}/mqdefault.jpg`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  ) : (
                    <img src={media.source} alt={`Thumbnail ${index + 1}`} />
                  )}
                </Thumbnail>
              ))}
            </ThumbnailGrid>
          )}
        </MediaSection>

        {/* OVERVIEW */}
        {detailInfo?.overview && (
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <SectionContent>{detailInfo.overview}</SectionContent>
          </Section>
        )}

        {/* QUICK INFO */}
        {(detailInfo?.myRole || game.platforms.length > 0) && (
          <Section>
            <SectionTitle>Project Information</SectionTitle>
            <InfoGrid>
              {detailInfo?.myRole && (
                <InfoCard>
                  <InfoLabel>My Role</InfoLabel>
                  <InfoValue>{detailInfo.myRole}</InfoValue>
                </InfoCard>
              )}
              {game.platforms.length > 0 && (
                <InfoCard>
                  <InfoLabel>Platforms</InfoLabel>
                  <InfoValue>{game.platforms.join(", ")}</InfoValue>
                </InfoCard>
              )}
              {game.engine && (
                <InfoCard>
                  <InfoLabel>Engine</InfoLabel>
                  <InfoValue>{game.engine}</InfoValue>
                </InfoCard>
              )}
            </InfoGrid>
          </Section>
        )}

        {/* MY CONTRIBUTIONS */}
        {detailInfo?.contributions && detailInfo.contributions.length > 0 && (
          <Section>
            <SectionTitle>What I Built</SectionTitle>
            <ContributionsList>
              {detailInfo.contributions.map((contribution, index) => (
                <ContributionCard key={index}>
                  <ContributionHeader>
                    {contribution.icon && (
                      <ContributionIcon>{contribution.icon}</ContributionIcon>
                    )}
                    <ContributionTitle>{contribution.title}</ContributionTitle>
                  </ContributionHeader>
                  <ContributionDescription>
                    {contribution.description}
                  </ContributionDescription>
                </ContributionCard>
              ))}
            </ContributionsList>
          </Section>
        )}

        {/* TECHNICAL HIGHLIGHTS */}
        {detailInfo?.technicalHighlights && detailInfo.technicalHighlights.length > 0 && (
          <Section>
            <SectionTitle>Technical Highlights</SectionTitle>
            {detailInfo.technicalHighlights.map((highlight, index) => (
              <TechHighlightCard key={index}>
                <TechTitle>{highlight.title}</TechTitle>
                <TechList>
                  {highlight.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </TechList>
              </TechHighlightCard>
            ))}
          </Section>
        )}

        {/* CHALLENGES */}
        {detailInfo?.challenges && detailInfo.challenges.length > 0 && (
          <Section>
            <SectionTitle>Challenges & Solutions</SectionTitle>
            <SectionContent>
              <SimpleList>
                {detailInfo.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </SimpleList>
            </SectionContent>
          </Section>
        )}

        {/* LEARNINGS */}
        {detailInfo?.learnings && detailInfo.learnings.length > 0 && (
          <Section>
            <SectionTitle>Key Learnings</SectionTitle>
            <SectionContent>
              <SimpleList>
                {detailInfo.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </SimpleList>
            </SectionContent>
          </Section>
        )}
      </Container>
    </Page>
  );
};

export default GameDetail;