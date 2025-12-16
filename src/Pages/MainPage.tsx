// src/pages/MainPage.tsx

import React from "react";
import styled from "styled-components";
import { games } from "../data"; 
import { Link } from "react-router-dom";

/* =======================
    LAYOUT
======================= */

const Page = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #121212; 
  min-height: 100vh;
  color: white; 
`;

const Container = styled.div`
  width: 80%;
  max-width: 1400px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* =======================
    CARD
======================= */

const Card = styled(Link)`
  background: #0e0e0e;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid transparent;
  background-image: 
    linear-gradient(#0e0e0e, #0e0e0e),
    linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border 0.25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
    border-color: transparent;
    background-image: 
      linear-gradient(#0e0e0e, #0e0e0e),
      linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 360px;
  background: black;
  flex-shrink: 0; 
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
  object-fit: cover;
`;

const NoMedia = styled.div`
  background: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 18px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const GameTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #fff;
`;

const ViewDetail = styled.span`
  font-size: 14px;
  color: #4da3ff;
  white-space: nowrap;
  margin-left: 12px;
`;

/* =======================
    GENRES
======================= */

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Genre = styled.span`
  background: #1e3a5f;
  color: #6db3ff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

/* =======================
    META
======================= */

const Meta = styled.div`
  margin-top: auto;
  padding-top: 12px;
  color: #aaa;
  font-size: 13px;
  border-top: 1px solid #1a1a1a;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
`;

const Tag = styled.span`
  background: #1a1a1a;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
`;

/* =======================
    LINKS
======================= */

const Links = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid #1a1a1a;
  flex-wrap: wrap;
`;

const IconLink = styled.a`
  display: inline-flex;
  transition: transform 0.2s ease;
  position: relative;
  z-index: 10;

  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(1.15);
  }
`;

/* =======================
    MAIN PAGE COMPONENT
======================= */

const MainPage: React.FC = () => {
  // Sử dụng Map để track loaded state tốt hơn
  const [loadedVideos] = React.useState(() => new Map<string, boolean>());

  const isVideoLoaded = (videoUrl: string) => {
    return loadedVideos.has(videoUrl);
  };

  const markVideoAsLoaded = (videoUrl: string) => {
    loadedVideos.set(videoUrl, true);
  };

  return (
    <Page>
      <Container>
        <Grid>
          {games.map((game, index) => {
            // Tìm youtube media
            const youtube = game.media.find(
              (m) => m.type === "youtube"
            );
            // Tìm image media
            const image = game.media.find(
              (m) => m.type === "image"
            );

            const videoLoaded = youtube ? isVideoLoaded(youtube.source) : false;

            return (
              <Card key={index} to={`/game/${index}`}>
                {/* MEDIA */}
                <MediaWrapper>
                  {youtube ? (
                    <Youtube
                      key={youtube.source}
                      src={`${youtube.source}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0`}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${game.name} video`}
                      loading="lazy"
                      onLoad={() => markVideoAsLoaded(youtube.source)}
                      style={{ display: 'block' }}
                    />
                  ) : image ? (
                    <GameImage src={image.source} alt={game.name} />
                  ) : (
                    <NoMedia>No Media Available</NoMedia>
                  )}
                </MediaWrapper>

                {/* CONTENT */}
                <Content>
                  <TitleRow>
                    <GameTitle>{game.name}</GameTitle>
                    <ViewDetail>
                      View detail →
                    </ViewDetail>
                  </TitleRow>

                  {/* GENRES */}
                  {game.genres && game.genres.length > 0 && (
                    <Genres>
                      {game.genres.map((genre, i) => (
                        <Genre key={i}>{genre}</Genre>
                      ))}
                    </Genres>
                  )}

                  {/* META INFO */}
                  <Meta>
                    <MetaRow>
                      {game.engine && <Tag>🎮 {game.engine}</Tag>}
                    </MetaRow>
                    <MetaRow>
                      {game.platforms.map((p, i) => (
                        <Tag key={i}>💻 {p}</Tag>
                      ))}
                    </MetaRow>
                  </Meta>

                  {/* LINKS - Hiển thị tất cả các link */}
                  {game.links && game.links.length > 0 && (
                    <Links>
                      {game.links.map((link, i) => (
                        <IconLink
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={link.url}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={link.source}
                            alt={`Link ${i + 1}`}
                          />
                        </IconLink>
                      ))}
                    </Links>
                  )}
                </Content>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
};

export default MainPage;