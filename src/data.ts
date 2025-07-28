import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Quốc Khánh",
  role: "Unity Developer",
  introduction: "GAME!GAME!GAME!",
  description: "I’m a Unity developer focused on creating fun and smooth mobile games. I enjoy turning ideas into interactive gameplay and building systems that are easy to improve and expand. I also have experience adding tools for ads and player data tracking. I work well in teams and always look for ways to improve my skills and the games I make.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/pipik2k",
    itchIO: "https://pipik2k.itch.io/",
    linkedIn: "https://www.linkedin.com/in/kh%C3%A1nh-ho%C3%A0ng-qu%E1%BB%91c-0363212b2/",
  }
};

export const games: Game[] = [
  {
    name: "MR Ragdoll",
    description: "The Physics Ragdoll 3D using Joints and Force to make funny gameplay, include byecycle and tounge",
    genres: ["Action", "Batlle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.ten.joints.mr.ragdoll.funny.fight&hl=en_IE" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=SyfMZUru2vA", type: MediaType.YouTube },
      { source: "/images/games/StickBoost/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/StickBoost/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/StickBoost/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Which Team Win",
    description: "The most wonderful part i used to learn from this project is hybrid ECS, which make the code x5 faster. There are few screenshots about the difference between ECS and Mono which use anaysys profiler for testing",
    genres: ["Strategy"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
	{ source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.cfs.gg.which.team.win" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=o5ZGHw-x_dM&t=131s", type: MediaType.YouTube },
      { source: "/images/games/WhichTeamWin/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/WhichTeamWin/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/WhichTeamWin/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/WhichTeamWin/Screenshot_4.png", type: MediaType.Image },
    ],
  },
  {
    name: "Find The Water",
    description: "Fast Prototype pipe water game i made in 3 days",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
	{ source: LinkImageSource.Github, url: "https://github.com/pipik2k/FindTheWater" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=uIn061JPrig", type: MediaType.YouTube },
      { source: "/images/games/FindTheWater/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/FindTheWater/Screenshot_2.png", type: MediaType.Image },
    ],
  },
  {
    name: "StickBoost",
    description: "A fast-paced stickman game where you boost through obstacles and collect power-ups.",
    genres: ["Arcade", "Action"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://pipik2k.itch.io/stickboost" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=n9gZ6u2DqYc", type: MediaType.YouTube },
      { source: "/images/games/StickBoost/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/StickBoost/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/StickBoost/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Stickman Jetpack",
    description: "Guide your stickman with a jetpack through challenging levels and avoid obstacles.",
    genres: ["Arcade", "Adventure"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/StickManJetPack" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=JxRtxLzQ9pA", type: MediaType.YouTube },
      { source: "/images/games/StickmanJetpack/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/StickmanJetpack/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/StickmanJetpack/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Magic Ball",
    description: "A puzzle game where you control a magic ball to solve physics-based challenges.",
    genres: ["Puzzle", "Physics"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/MagicBall" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=dwynUotenWs", type: MediaType.YouTube },
      { source: "/images/games/MagicBall/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/MagicBall/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/MagicBall/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  /*{
    name: "Fruits Game",
    description: "A fun and colorful game where you slice and collect fruits for high scores.",
    genres: ["Arcade", "Casual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.example.fruitsgame" },
    ],
    media: [
      { source: "https://www.youtube.com/watch?v=FRUITSGAME_VIDEO_ID", type: MediaType.YouTube },
      { source: "/images/games/FruitsGame/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/FruitsGame/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/FruitsGame/Screenshot_3.png", type: MediaType.Image },
    ],
  }*/
];