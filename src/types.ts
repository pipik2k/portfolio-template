export enum LinkImageSource {
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
  CHPlay = "/images/logos/chplay.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    itchIO: string;
    linkedIn: string;
  };
}

export interface Contribution {
    title: string;
    description: string;
    icon?: string;
}

export interface TechnicalHighlight {
    title: string;
    details: string[];
}
export interface Game {
  name: string;
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
  detailedInfo: {
        overview: string;
        myRole: string;
        contributions: Contribution[]; 
        technicalHighlights?: TechnicalHighlight[]; 
        challenges?: string[]; 
        learnings?: string[]; 
        duration?: string; 
        teamSize?: string; 
    };

}