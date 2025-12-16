import React, { useState } from "react";
import { styled } from "styled-components";
import { MediaItem, MediaType } from "../types";
import { Row } from "../Styles/StyledComponents";

const MediaWrapper = styled(Row)`
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MediaIframe = styled.iframe`
  width: 70%;
  height: 100%;
  border: none;
  background: black;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  cursor: pointer;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const PopupImage = styled.img`
  max-width: 70%;
  max-height: 70%;
  object-fit: contain;
  
  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 90%;
  }
`;

const BigMedia: React.FC<MediaItem> = ({ source, type }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    if (type === MediaType.Image) {
      setIsPopupOpen(true);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // FIX: Thêm return statement
    return `${url}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`;
  };

  return (
    <>
      <MediaWrapper onClick={handleClick}>
        {type === MediaType.YouTube ? (
          <MediaIframe
            src={getYouTubeEmbedUrl(source)}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          // FIX: Sửa syntax string template
          <MediaImage 
            src={`${process.env.PUBLIC_URL}${source}`} 
            alt="Game Media" 
          />
        )}
      </MediaWrapper>

      {isPopupOpen && (
        <PopupOverlay onClick={() => setIsPopupOpen(false)}>
          {/* FIX: Sửa syntax string template */}
          <PopupImage 
            src={`${process.env.PUBLIC_URL}${source}`} 
            alt="Enlarged Media" 
            onClick={(e) => e.stopPropagation()} 
          />
        </PopupOverlay>
      )}
    </>
  );
};

export default BigMedia;