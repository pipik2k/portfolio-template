import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Quốc Khánh",
  role: "Unity Developer",
  introduction: "Contact:0989288036",
  description: "I'm a Unity developer focused on creating fun and smooth mobile games. I enjoy turning ideas into interactive gameplay and building systems that are easy to improve and expand. I also have experience adding tools for ads and player data tracking. I work well in teams and always look for ways to improve my skills and the games I make.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Hoang-Quoc-Khanh-UnityDev.pdf`,
  links: {
    github: "https://github.com/pipik2k",
    itchIO: "https://pipik2k.itch.io/",
    linkedIn: "https://www.linkedin.com/in/kh%C3%A1nh-ho%C3%A0ng-qu%E1%BB%91c-0363212b2/",
  }
};

export const games: Game[] = [
  {
    name: "Mr Ragdoll",
    genres: ["Action", "Battle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.ten.joints.mr.ragdoll.funny.fight&hl=en_IE" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/anF7wJqBm8s", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/MrRagdoll/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MrRagdoll/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MrRagdoll/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A hilarious physics-based fighting game featuring ragdoll characters with unique mechanics including bicycle riding and tongue grabbing. The game uses advanced joint systems to create funny and unpredictable gameplay moments.",
      myRole: "Solo Unity Developer - Full gameplay and physics implementation",
      duration: "2 months",
      teamSize: "Solo project with art support",
      contributions: [
        {
          title: "Advanced Physics System",
          description: "Implemented complex ragdoll physics using Unity's ArticulationBody and ConfigurableJoint systems. Created custom spring joints for bicycle mechanics and tongue extension that react naturally to forces and collisions.",
          icon: "🤸"
        },
        {
          title: "Gameplay Mechanics",
          description: "Designed and programmed unique fighting mechanics including grab system, throw physics, and environmental interactions. Carefully tuned physics parameters to achieve the perfect balance between realistic physics and comedic gameplay.",
          icon: "🎯"
        },
        {
          title: "Vehicle Physics",
          description: "Created a custom bicycle physics system with balance mechanics, acceleration, and ragdoll interaction while riding. Players can perform stunts and use the bicycle as a weapon in combat.",
          icon: "🚴"
        },
        {
          title: "Monetization Integration",
          description: "Integrated multiple ad networks (AdMob, Unity Ads) with strategic placement that maintains good user experience. Implemented rewarded video ads for extra lives and power-ups.",
          icon: "💰"
        }
      ],
      technicalHighlights: [
        {
          title: "Physics Implementation",
          details: [
            "Custom ragdoll controller with procedural animation blending",
            "Force-based combat system with accurate knockback calculations",
            "Spring joint system for extendable tongue mechanics",
            "Gyroscopic forces for bicycle balance simulation"
          ]
        },
        {
          title: "Performance Optimization",
          details: [
            "Optimized physics calculations to maintain 60 FPS on mid-range devices",
            "Efficient collision detection using layer-based filtering",
            "Object pooling for frequently spawned effects"
          ]
        }
      ],
      challenges: [
        "Making ragdoll physics feel responsive and controllable while maintaining comedic chaos",
        "Preventing physics glitches that could break gameplay or cause soft-locks",
        "Balancing difficulty curve to keep players engaged without frustration",
        "Managing performance with multiple active ragdolls and physics objects"
      ],
      learnings: [
        "Deep understanding of Unity's physics system, joints, and constraints",
        "How to tune physics parameters for entertainment rather than pure realism",
        "Mobile game monetization strategies and ad network integration",
        "Importance of extensive playtesting for physics-based games"
      ]
    }
  },

  {
    name: "Which Team Win",
    genres: ["Strategy"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.cfs.gg.which.team.win" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/o5ZGHw-x_dM", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/WhichTeamWin/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/WhichTeamWin/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/WhichTeamWin/Screenshot_3.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/WhichTeamWin/Screenshot_4.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A strategic battle simulation game where players predict which team will win. Features large-scale battles with hundreds of units fighting simultaneously, optimized using Unity's Entity Component System.",
      myRole: "Lead Unity Developer - Performance optimization and ECS architecture",
      duration: "6 months",
      teamSize: "Team of 5 developers",
      contributions: [
        {
          title: "Hybrid ECS Implementation",
          description: "Successfully migrated critical gameplay systems from traditional MonoBehaviour to Unity's Data-Oriented Technology Stack (DOTS). This architectural change resulted in a 5x performance improvement in unit processing. Implemented custom job systems for unit AI, pathfinding, and combat calculations.",
          icon: "🚀"
        },
        {
          title: "Performance Optimization",
          description: "Optimized rendering pipeline using GPU instancing and dynamic batching techniques. Reduced draw calls by 70% through careful material management and mesh combining. Maintained stable 60 FPS with 500+ active units even on mid-range devices.",
          icon: "⚡"
        },
        {
          title: "Combat System Design",
          description: "Developed a flexible combat system supporting multiple unit types, special abilities, and formation strategies. Implemented behavior trees for sophisticated AI decision-making and A* pathfinding algorithm for efficient unit movement.",
          icon: "🎮"
        },
        {
          title: "Analytics Integration",
          description: "Integrated Firebase Analytics with custom event tracking to monitor player behavior, session length, and retention rates. Used collected data to identify gameplay bottlenecks and drive balance improvements.",
          icon: "📊"
        }
      ],
      technicalHighlights: [
        {
          title: "ECS Performance Analysis",
          details: [
            "5x faster unit update loops using DOTS Job System with Burst Compiler",
            "80% reduction in memory allocations through data-oriented design",
            "Maintained 60 FPS with 500+ concurrent entities on test devices",
            "Extensive profiling using Unity Profiler to identify and eliminate bottlenecks"
          ]
        },
        {
          title: "Optimization Techniques Applied",
          details: [
            "GPU Instancing for rendering identical unit meshes",
            "Object pooling system for projectiles, effects, and UI elements",
            "LOD (Level of Detail) system for units based on camera distance",
            "Spatial hashing grid for efficient collision and proximity queries"
          ]
        }
      ],
      challenges: [
        "Migrating existing MonoBehaviour codebase to ECS while preserving gameplay feel",
        "Debugging complex race conditions in multi-threaded job systems",
        "Balancing game difficulty across different device performance capabilities",
        "Optimizing for low-end Android devices with only 2GB RAM"
      ],
      learnings: [
        "Deep understanding of Unity's DOTS, ECS, and Job System architecture",
        "Advanced profiling and optimization techniques for mobile platforms",
        "Data-driven design principles for scalable game systems",
        "Writing maintainable code in a data-oriented programming paradigm"
      ]
    }
  },

  {
    name: "CupHead",
    genres: ["Platform", "Adventure"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/CupHead" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/jhwuggSz2Mk", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/CupHead/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/CupHead/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/CupHead/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A recreation of Cuphead's boss fight mechanics with custom visual effects including lightning, god rays, and film grain to match the game's iconic 1930s cartoon aesthetic. This learning project focused on advanced rendering techniques and boss pattern design.",
      myRole: "Solo Developer - Programming and technical art implementation",
      duration: "2 months",
      teamSize: "Solo learning project",
      contributions: [
        {
          title: "Custom Post-Processing Effects",
          description: "Implemented vintage film effects using Unity's URP post-processing stack. Created custom shader effects including old film grain with scanlines, chromatic aberration, vignette, and period-accurate color grading to achieve the authentic 1930s cartoon look.",
          icon: "🎨"
        },
        {
          title: "Advanced Particle Systems",
          description: "Designed and implemented god ray particle effects using custom shaders and Unity's VFX Graph. Created volumetric lighting effects that add atmospheric depth and enhance the vintage aesthetic.",
          icon: "⚡"
        },
        {
          title: "Boss Fight Mechanics",
          description: "Programmed pattern-based boss AI with multiple distinct attack phases. Implemented telegraphed attack system with visual indicators, parry mechanics with precise timing windows, and special move combos that reward skilled play.",
          icon: "🎮"
        },
        {
          title: "Visual Polish & Game Feel",
          description: "Added screen shake with customizable intensity curves, hit stop frames for impactful combat feedback, and extensive particle effects for all combat interactions. Implemented smooth camera following with look-ahead prediction.",
          icon: "✨"
        }
      ],
      technicalHighlights: [
        {
          title: "Visual Effects System",
          details: [
            "Custom HLSL shader for authentic film grain with controllable intensity and speed",
            "Volumetric god rays using raymarching technique in screen space",
            "Color LUT (Look-Up Table) system for vintage cartoon color palette",
            "Screen-space distortion effects for impactful hit reactions"
          ]
        },
        {
          title: "Boss Pattern System",
          details: [
            "State machine architecture for managing boss phases and transitions",
            "Scriptable Object-based attack pattern configuration",
            "Pooled projectile system with custom trajectory calculations",
            "Audio-visual synchronization for attack telegraphs"
          ]
        }
      ],
      challenges: [
        "Replicating Cuphead's unique hand-drawn visual style with limited art resources",
        "Balancing multiple post-processing effects while maintaining 60 FPS performance",
        "Creating boss attack patterns that feel challenging but fair to players",
        "Learning HLSL shader programming from scratch for custom effects"
      ],
      learnings: [
        "Unity's Universal Render Pipeline (URP) and post-processing systems",
        "HLSL shader programming fundamentals and optimization",
        "Importance of visual and audio feedback in creating satisfying action gameplay",
        "Game design principles for boss fight pattern creation and difficulty balancing"
      ]
    }
  },

  {
    name: "Memory Halloween Game",
    genres: ["Puzzle"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/HalloweenMemoryGame" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/mt1ALIdXIns", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/MemoryHalloweenGame/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MemoryHalloweenGame/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MemoryHalloweenGame/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A memory card matching game with a spooky Halloween theme. Features progressive difficulty, atmospheric effects, and engaging card flip animations that create a chilling yet fun experience.",
      myRole: "Solo Developer - Full game implementation",
      duration: "2 weeks",
      teamSize: "Solo project",
      contributions: [
        {
          title: "Game Logic Implementation",
          description: "Developed the core memory game mechanics with card shuffling, matching detection, and scoring system. Implemented a flexible grid system that scales to different difficulty levels and screen sizes.",
          icon: "🎮"
        },
        {
          title: "Animation System",
          description: "Created smooth card flip animations using DOTween for professional-quality transitions. Added particle effects for successful matches and atmospheric background animations.",
          icon: "✨"
        },
        {
          title: "UI/UX Design",
          description: "Designed and implemented an intuitive Halloween-themed UI with timer, score tracking, and difficulty selection. Added sound effects and ambient audio to enhance the spooky atmosphere.",
          icon: "🎨"
        }
      ],
      challenges: [
        "Creating a random card shuffling algorithm that ensures solvability",
        "Managing game state transitions and preventing input during animations",
        "Balancing difficulty progression to keep players engaged"
      ],
      learnings: [
        "Game state management patterns in Unity",
        "DOTween animation library for smooth transitions",
        "Creating polished UI/UX for casual games"
      ]
    }
  },

  {
    name: "Magic Ball",
    genres: ["Puzzle", "Physics"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/MagicBall" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/dwynUotenWs", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/MagicBall/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MagicBall/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/MagicBall/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A physics-based puzzle game where players control a magical ball to navigate through challenging levels. Features realistic physics interactions, momentum-based puzzles, and increasingly complex level designs.",
      myRole: "Solo Developer - Gameplay and level design",
      duration: "3 weeks",
      teamSize: "Solo project",
      contributions: [
        {
          title: "Physics-Based Controls",
          description: "Implemented tight and responsive ball controls using Unity's physics system. Tuned physics materials and force application for satisfying player feedback and precise control.",
          icon: "🎮"
        },
        {
          title: "Level Design System",
          description: "Created a modular level design system with reusable components. Designed 20+ levels with progressive difficulty that teach physics concepts through gameplay.",
          icon: "🏗️"
        },
        {
          title: "Puzzle Mechanics",
          description: "Implemented various puzzle elements including moving platforms, switches, teleporters, and gravity zones. Each mechanic introduces new challenges and ways to solve puzzles.",
          icon: "🧩"
        }
      ],
      challenges: [
        "Balancing realistic physics with fun and predictable gameplay",
        "Creating levels that teach mechanics without explicit tutorials",
        "Preventing physics glitches from breaking puzzle solutions"
      ],
      learnings: [
        "Physics-based game design principles",
        "Level design and difficulty progression",
        "Unity Physics Material system and tuning"
      ]
    }
  },

  {
    name: "Find The Water",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/FindTheWater" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/uIn061JPrig", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/FindTheWater/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/FindTheWater/Screenshot_2.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A fast-paced pipe connection puzzle game created in just 3 days. Players must rotate pipes to create a path for water to flow from the source to the destination before time runs out.",
      myRole: "Solo Developer - Rapid prototyping",
      duration: "3 days",
      teamSize: "Solo project",
      contributions: [
        {
          title: "Rapid Prototyping",
          description: "Completed full game loop from concept to playable build in 72 hours. Focused on core mechanics first, then added polish incrementally.",
          icon: "⚡"
        },
        {
          title: "Pipe System",
          description: "Implemented grid-based pipe connection system with rotation mechanics. Created water flow simulation with visual feedback showing the active path.",
          icon: "🔧"
        },
        {
          title: "Level Generator",
          description: "Built a procedural level generation system that creates solvable puzzles with varying difficulty. Ensures each level has at least one valid solution.",
          icon: "🎲"
        }
      ],
      challenges: [
        "Completing a full game in a 3-day timeframe",
        "Ensuring generated puzzles are always solvable",
        "Creating intuitive controls for mobile touch input"
      ],
      learnings: [
        "Rapid prototyping and iterative development",
        "Procedural puzzle generation algorithms",
        "Time management and scope control"
      ]
    }
  },

  {
    name: "John Man",
    genres: ["Action"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.CHPlay, url: "https://play.google.com/store/apps/details?id=com.cf.gg.johnman&hl=vi" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/q5GNDJS1LmM", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/JohnMan/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/JohnMan/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/JohnMan/Screenshot_3.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/JohnMan/Screenshot_4.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "An action-packed ragdoll fighting game featuring active ragdoll physics. Contributed to gameplay programming, IAP integration, and analytics implementation for this commercial mobile game.",
      myRole: "Unity Developer - Gameplay and monetization",
      duration: "5 months",
      teamSize: "Team of 6",
      contributions: [
        {
          title: "IAP Implementation",
          description: "Integrated Unity IAP for in-game purchases including character skins, power-ups, and ad removal. Implemented purchase validation and receipt verification for security.",
          icon: "💰"
        },
        {
          title: "Gameplay Programming",
          description: "Developed combat mechanics, special moves, and combo system. Implemented enemy AI with varying difficulty levels and attack patterns.",
          icon: "🎮"
        },
        {
          title: "Analytics & Retention",
          description: "Integrated Firebase Analytics to track DAU (Daily Active Users), session length, and player progression. Used data insights to optimize difficulty curve and monetization points.",
          icon: "📊"
        },
        {
          title: "Active Ragdoll System",
          description: "Learned and implemented active ragdoll techniques that blend animation with physics for responsive character control while maintaining realistic physics reactions.",
          icon: "🤸"
        }
      ],
      technicalHighlights: [
        {
          title: "Monetization Strategy",
          details: [
            "Implemented rewarded video ads for bonus rewards",
            "IAP store with multiple purchase options",
            "A/B testing for optimal ad placement",
            "Analytics-driven pricing optimization"
          ]
        }
      ],
      challenges: [
        "Balancing monetization without hurting player experience",
        "Implementing secure IAP with proper validation",
        "Interpreting analytics data to drive design decisions"
      ],
      learnings: [
        "Mobile game monetization strategies and best practices",
        "Unity IAP and receipt validation implementation",
        "Data-driven game design using Firebase Analytics",
        "Active ragdoll physics implementation techniques"
      ]
    }
  },

  {
    name: "StickBoost",
    genres: ["Arcade", "Action"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.ItchIo, url: "https://pipik2k.itch.io/stickboost" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/n9gZ6u2DqYc", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/StickBoost/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/StickBoost/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/StickBoost/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A fast-paced endless runner where players boost through obstacles at high speeds. Features responsive one-touch controls, power-up system, and increasing difficulty.",
      myRole: "Solo Developer",
      duration: "1 month",
      teamSize: "Solo",
      contributions: [
        {
          title: "Endless Runner System",
          description: "Implemented procedural obstacle generation with object pooling for performance. Created a difficulty scaling system that gradually increases speed and complexity.",
          icon: "🏃"
        },
        {
          title: "Power-up System",
          description: "Designed and implemented various power-ups including shields, speed boosts, and magnets. Each power-up has unique visual effects and gameplay impact.",
          icon: "⚡"
        },
        {
          title: "Touch Controls",
          description: "Created responsive one-touch controls optimized for mobile. Added haptic feedback and visual indicators for better player feedback.",
          icon: "📱"
        }
      ],
      learnings: [
        "Procedural generation techniques",
        "Mobile-optimized input handling",
        "Object pooling for performance"
      ]
    }
  },

  {
    name: "Stickman Jetpack",
    genres: ["Arcade", "Adventure"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/StickManJetPack" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/JxRtxLzQ9pA", type: MediaType.YouTube },
      { source: `${process.env.PUBLIC_URL}/images/games/StickmanJetpack/Screenshot_1.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/StickmanJetpack/Screenshot_2.png`, type: MediaType.Image },
      { source: `${process.env.PUBLIC_URL}/images/games/StickmanJetpack/Screenshot_3.png`, type: MediaType.Image },
    ],
    detailedInfo: {
      overview: "A physics-based flying game where players navigate a stickman with a jetpack through challenging obstacle courses. Features realistic jetpack physics and precision-based level design.",
      myRole: "Solo Developer",
      duration: "3 weeks",
      teamSize: "Solo",
      contributions: [
        {
          title: "Jetpack Physics",
          description: "Implemented realistic jetpack physics with fuel management, thrust control, and momentum-based movement. Fine-tuned physics parameters for satisfying flight feel.",
          icon: "🚀"
        },
        {
          title: "Level Design",
          description: "Created 15+ handcrafted levels with increasing difficulty. Each level teaches new mechanics and challenges players with unique obstacle configurations.",
          icon: "🎯"
        },
        {
          title: "Particle Effects",
          description: "Designed jetpack flame particles, explosion effects, and environmental visual effects that enhance the flying experience.",
          icon: "✨"
        }
      ],
      learnings: [
        "Physics-based character control",
        "Level design for skill-based games",
        "Particle system optimization"
      ]
    }
  },

  {
    name: "Shiny Merge Ball",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/ShinyMergeBall" },
    ],
    media: [
      { source: "https://www.youtube.com/shorts/MGYt6vzWnjk", type: MediaType.YouTube },
    ],
    detailedInfo: {
      overview: "A satisfying merge puzzle game where players combine balls to create higher-value balls. Features simple mechanics with deep strategic gameplay.",
      myRole: "Solo Developer",
      duration: "2 weeks",
      teamSize: "Solo",
      contributions: [
        {
          title: "Merge Mechanics",
          description: "Implemented smooth ball merging with physics-based dropping. Created a scoring system that rewards strategic planning and combos.",
          icon: "🔮"
        },
        {
          title: "Visual Feedback",
          description: "Added satisfying particle effects, screen shake, and ball evolution animations. Each merge feels impactful and rewarding.",
          icon: "✨"
        }
      ],
      learnings: [
        "Merge game mechanics design",
        "Creating satisfying feedback loops",
        "Mobile puzzle game optimization"
      ]
    }
  },

  {
    name: "Sudoku",
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/pipik2k/Sudoku" },
    ],
    media: [
      { source: "https://www.youtube.com/embed/hpGQdo0GIBs", type: MediaType.YouTube },
    ],
    detailedInfo: {
      overview: "A clean and simple Sudoku implementation focusing on core gameplay. Created as a learning project to understand puzzle generation algorithms.",
      myRole: "Solo Developer",
      duration: "1 week",
      teamSize: "Solo",
      contributions: [
        {
          title: "Sudoku Generator",
          description: "Implemented a Sudoku puzzle generator that creates valid puzzles with unique solutions. Added difficulty levels by controlling the number of given cells.",
          icon: "🎲"
        },
        {
          title: "Validation System",
          description: "Created real-time validation that checks for conflicts and highlights errors. Added hint system and undo/redo functionality.",
          icon: "✅"
        },
        {
          title: "Clean UI",
          description: "Designed a minimalist UI focused on clarity and ease of use. Implemented touch controls optimized for mobile input.",
          icon: "📱"
        }
      ],
      learnings: [
        "Sudoku generation and solving algorithms",
        "Backtracking algorithms for puzzle validation",
        "Minimalist UI design principles"
      ]
    }
  },
];