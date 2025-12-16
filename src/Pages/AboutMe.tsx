// src/Components/AboutMe.tsx

import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";

const AboutSection = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4da3ff;
  box-shadow: 0 10px 40px rgba(77, 163, 255, 0.3);
  margin-bottom: 24px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 0 0 8px 0;
  color: #fff;
`;

const Role = styled.h2`
  font-size: 20px;
  margin: 0 0 24px 0;
  color: #4da3ff;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2a2a2a;
  border-radius: 50%;
  color: #4da3ff;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 20px;

  &:hover {
    background: #4da3ff;
    color: white;
    transform: translateY(-3px);
  }
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #4da3ff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #3d8cd9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(77, 163, 255, 0.4);
  }
`;

const InfoSection = styled.div`
  color: white;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 48px;
`;

const TechSection = styled.div`
  margin-top: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0 0 24px 0;
  border-bottom: 2px solid #4da3ff;
  padding-bottom: 12px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const TechCard = styled.div`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid #2a2a4a;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;

  &:hover {
    border-color: #4da3ff;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(77, 163, 255, 0.2);
  }
`;

const TechCategory = styled.h4`
  font-size: 18px;
  color: #4da3ff;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TechList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TechItem = styled.li`
  font-size: 14px;
  color: #bbb;
  padding: 6px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  &:before {
    content: "▹";
    color: #4da3ff;
    font-weight: bold;
  }
`;

const DesignPatternsSection = styled.div`
  margin-top: 32px;
`;

const PatternGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const PatternBadge = styled.div`
  background: linear-gradient(135deg, #1e3a5f 0%, #2a4a6a 100%);
  border: 1px solid #4da3ff;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #2a4a6a 0%, #3a5a7a 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(77, 163, 255, 0.3);
    z-index: 50;
  }

  &:hover .preview-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const PatternName = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;

const PatternType = styled.div`
  color: #4da3ff;
  font-size: 12px;
  margin-top: 4px;
`;

const PreviewTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: #1e1e1e;
  border: 1px solid #4da3ff;
  border-radius: 8px;
  padding: 12px;
  width: 300px;
  max-width: 90vw;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
  margin-top: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
  pointer-events: none;

  @media (max-width: 768px) {
    width: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #4da3ff;
  }
`;

const PreviewText = styled.p`
  color: #bbb;
  font-size: 12px;
  line-height: 1.4;
  margin: 0 0 8px 0;
`;

const ClickHint = styled.div`
  color: #4da3ff;
  font-size: 11px;
  text-align: center;
  font-weight: 600;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #333;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: ${props => props.isOpen ? 'fadeIn 0.2s' : 'none'};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 32px;
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  border: 2px solid #4da3ff;
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    max-height: 90vh;
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #0d1117;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4da3ff;
    border-radius: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #4da3ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    background: #3d8cd9;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ModalTitle = styled.h2`
  color: #4da3ff;
  margin: 0 0 8px 0;
  font-size: 32px;
  padding-right: 100px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ModalType = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionBlock = styled.div`
  margin-bottom: 24px;
`;

const SectionLabel = styled.h3`
  color: #fff;
  font-size: 18px;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionText = styled.p`
  color: #ccc;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
`;

const CodeBlock = styled.pre`
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid #30363d;
  margin: 0;

  code {
    color: #c9d1d9;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 12px;
    
    code {
      font-size: 12px;
    }
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #161b22;
  }

  &::-webkit-scrollbar-thumb {
    background: #4da3ff;
    border-radius: 4px;
  }
`;

interface TechStackItem {
  category: string;
  icon: string;
  items: string[];
}

interface DesignPattern {
  name: string;
  type: string;
  description: string;
  code: string;
  useCase: string;
}

interface OptimizationTechnique {
  name: string;
  category: string;
  description: string;
  impact: string;
  steps: string[];
  images?: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const techStack: TechStackItem[] = [
  {
    category: "Game Development",
    icon: "🎮",
    items: [
      "Unity Engine (5+ years)",
      "Unity DOTS & ECS",
      "Physics Systems",
      "Shader Programming (HLSL)",
      "Animation Systems",
      "AI & Pathfinding"
    ]
  },
  {
    category: "Programming",
    icon: "💻",
    items: [
      "C# (Advanced)",
      "Object-Oriented Programming",
      "Data-Oriented Design",
      "Algorithm Optimization",
      "Multi-threading & Jobs",
      "Git Version Control"
    ]
  },
  {
    category: "Mobile Development",
    icon: "📱",
    items: [
      "Android Optimization",
      "Touch Controls",
      "AdMob & Unity Ads",
      "In-App Purchases",
      "Firebase Analytics",
      "Performance Profiling"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    items: [
      "Unity Editor Scripting",
      "DOTween Animation",
      "Addressables System",
      "Unity Profiler",
      "Visual Studio",
      "GitHub"
    ]
  }
];

const designPatterns: DesignPattern[] = [
  { 
    name: "Singleton", 
    type: "Creational",
    description: "Ensures a class has only one instance and provides a global point of access to it.",
    useCase: "Perfect for GameManager, AudioManager, or any system that should have only one instance.",
    code: `public class GameManager : MonoBehaviour
{
    private static GameManager _instance;
    
    public static GameManager Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = FindObjectOfType<GameManager>();
                
                if (_instance == null)
                {
                    GameObject go = new GameObject("GameManager");
                    _instance = go.AddComponent<GameManager>();
                }
            }
            return _instance;
        }
    }
    
    private void Awake()
    {
        if (_instance != null && _instance != this)
        {
            Destroy(gameObject);
            return;
        }
        
        _instance = this;
        DontDestroyOnLoad(gameObject);
    }
}`
  },
  { 
    name: "Object Pool", 
    type: "Creational",
    description: "Reuses objects instead of creating and destroying them, improving performance.",
    useCase: "Essential for bullets, particles, enemies, or any frequently spawned objects.",
    code: `public class ObjectPool : MonoBehaviour
{
    [SerializeField] private GameObject prefab;
    [SerializeField] private int initialSize = 10;
    
    private Queue<GameObject> pool = new Queue<GameObject>();
    
    private void Start()
    {
        for (int i = 0; i < initialSize; i++)
        {
            GameObject obj = Instantiate(prefab);
            obj.SetActive(false);
            pool.Enqueue(obj);
        }
    }
    
    public GameObject Get()
    {
        if (pool.Count > 0)
        {
            GameObject obj = pool.Dequeue();
            obj.SetActive(true);
            return obj;
        }
        
        return Instantiate(prefab);
    }
    
    public void Return(GameObject obj)
    {
        obj.SetActive(false);
        pool.Enqueue(obj);
    }
}`
  },
  { 
    name: "Factory Method", 
    type: "Creational",
    description: "Creates objects without specifying the exact class to create.",
    useCase: "Used for creating different enemy types, weapons, or power-ups based on configuration.",
    code: `public abstract class Enemy : MonoBehaviour
{
    public abstract void Attack();
}

public class Zombie : Enemy
{
    public override void Attack() 
    { 
        Debug.Log("Zombie melee attack!"); 
    }
}

public class Shooter : Enemy
{
    public override void Attack() 
    { 
        Debug.Log("Shooter ranged attack!"); 
    }
}

public class EnemyFactory
{
    public Enemy CreateEnemy(string type)
    {
        GameObject obj = new GameObject(type);
        
        switch (type)
        {
            case "Zombie":
                return obj.AddComponent<Zombie>();
            case "Shooter":
                return obj.AddComponent<Shooter>();
            default:
                return null;
        }
    }
}`
  },
  { 
    name: "Observer", 
    type: "Behavioral",
    description: "Defines a one-to-many dependency between objects so when one changes state, all dependents are notified.",
    useCase: "Perfect for events like player death, score changes, achievement unlocks.",
    code: `public class GameEvents : MonoBehaviour
{
    public static GameEvents Instance { get; private set; }
    
    public event Action<int> OnScoreChanged;
    public event Action OnPlayerDied;
    public event Action<int> OnHealthChanged;
    
    private void Awake()
    {
        Instance = this;
    }
    
    public void TriggerScoreChanged(int newScore)
    {
        OnScoreChanged?.Invoke(newScore);
    }
    
    public void TriggerPlayerDied()
    {
        OnPlayerDied?.Invoke();
    }
}

// Usage in UI
public class ScoreUI : MonoBehaviour
{
    private void OnEnable()
    {
        GameEvents.Instance.OnScoreChanged += UpdateScore;
    }
    
    private void OnDisable()
    {
        GameEvents.Instance.OnScoreChanged -= UpdateScore;
    }
    
    private void UpdateScore(int score)
    {
        // Update UI
    }
}`
  },
  { 
    name: "State Machine", 
    type: "Behavioral",
    description: "Allows an object to alter its behavior when its internal state changes.",
    useCase: "Perfect for character AI, game states, animation controllers.",
    code: `public interface IState
{
    void Enter();
    void Update();
    void Exit();
}

public class IdleState : IState
{
    private Enemy enemy;
    
    public IdleState(Enemy enemy) { this.enemy = enemy; }
    
    public void Enter() { Debug.Log("Entering Idle"); }
    public void Update() { /* Check for player */ }
    public void Exit() { }
}

public class ChaseState : IState
{
    private Enemy enemy;
    
    public ChaseState(Enemy enemy) { this.enemy = enemy; }
    
    public void Enter() { Debug.Log("Entering Chase"); }
    public void Update() { /* Chase player */ }
    public void Exit() { }
}

public class StateMachine
{
    private IState currentState;
    
    public void ChangeState(IState newState)
    {
        currentState?.Exit();
        currentState = newState;
        currentState?.Enter();
    }
    
    public void Update()
    {
        currentState?.Update();
    }
}`
  },
  { 
    name: "Command Pattern", 
    type: "Behavioral",
    description: "Encapsulates a request as an object, allowing for parameterization and queuing of requests.",
    useCase: "Perfect for input handling, undo/redo systems, replay systems.",
    code: `public interface ICommand
{
    void Execute();
    void Undo();
}

public class MoveCommand : ICommand
{
    private Transform transform;
    private Vector3 direction;
    private Vector3 previousPosition;
    
    public MoveCommand(Transform t, Vector3 dir)
    {
        transform = t;
        direction = dir;
    }
    
    public void Execute()
    {
        previousPosition = transform.position;
        transform.position += direction;
    }
    
    public void Undo()
    {
        transform.position = previousPosition;
    }
}

public class InputHandler : MonoBehaviour
{
    private Stack<ICommand> commandHistory = new Stack<ICommand>();
    
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.W))
        {
            ICommand cmd = new MoveCommand(transform, Vector3.forward);
            cmd.Execute();
            commandHistory.Push(cmd);
        }
        
        if (Input.GetKeyDown(KeyCode.Z))
        {
            if (commandHistory.Count > 0)
            {
                commandHistory.Pop().Undo();
            }
        }
    }
}`
  },
  { 
    name: "Strategy", 
    type: "Behavioral",
    description: "Defines a family of algorithms and makes them interchangeable.",
    useCase: "Used for different AI behaviors, attack patterns, movement types.",
    code: `public interface IMovementStrategy
{
    void Move(Transform transform);
}

public class WalkStrategy : IMovementStrategy
{
    public void Move(Transform transform)
    {
        transform.position += Vector3.forward * 2f * Time.deltaTime;
    }
}

public class FlyStrategy : IMovementStrategy
{
    public void Move(Transform transform)
    {
        transform.position += Vector3.up * 3f * Time.deltaTime;
    }
}

public class Character : MonoBehaviour
{
    private IMovementStrategy movementStrategy;
    
    public void SetMovementStrategy(IMovementStrategy strategy)
    {
        movementStrategy = strategy;
    }
    
    private void Update()
    {
        movementStrategy?.Move(transform);
    }
}`
  },
  { 
    name: "MVC/MVVM", 
    type: "Architectural",
    description: "Separates data (Model), presentation (View), and logic (Controller/ViewModel).",
    useCase: "Used for clean UI architecture and data binding.",
    code: `// Model
public class PlayerData
{
    public int Health { get; set; }
    public int Score { get; set; }
}

// View
public class PlayerUI : MonoBehaviour
{
    [SerializeField] private Text healthText;
    [SerializeField] private Text scoreText;
    
    public void UpdateHealth(int health)
    {
        healthText.text = $"HP: {health}";
    }
    
    public void UpdateScore(int score)
    {
        scoreText.text = $"Score: {score}";
    }
}

// Controller
public class PlayerController : MonoBehaviour
{
    private PlayerData model;
    private PlayerUI view;
    
    private void Start()
    {
        model = new PlayerData { Health = 100, Score = 0 };
        view = GetComponent<PlayerUI>();
        UpdateView();
    }
    
    public void TakeDamage(int damage)
    {
        model.Health -= damage;
        UpdateView();
    }
    
    private void UpdateView()
    {
        view.UpdateHealth(model.Health);
        view.UpdateScore(model.Score);
    }
}`
  },
  { 
    name: "Component Pattern", 
    type: "Structural",
    description: "Allows objects to be composed of multiple independent components.",
    useCase: "Unity's core architecture - GameObject + Components.",
    code: `// Unity already uses Component Pattern!
// But here's how to create custom component systems

public interface IComponent
{
    void Initialize(GameObject owner);
    void Update();
}

public class HealthComponent : MonoBehaviour, IComponent
{
    public int MaxHealth = 100;
    public int CurrentHealth { get; private set; }
    
    public void Initialize(GameObject owner)
    {
        CurrentHealth = MaxHealth;
    }
    
    public void TakeDamage(int damage)
    {
        CurrentHealth -= damage;
        if (CurrentHealth <= 0)
        {
            // Handle death
        }
    }
    
    public void Update() { }
}

// Usage
GameObject player = new GameObject("Player");
var health = player.AddComponent<HealthComponent>();
health.Initialize(player);`
  },
  { 
    name: "Service Locator", 
    type: "Structural",
    description: "Provides a global point of access to services without coupling to concrete implementations.",
    useCase: "Access managers and services without Singleton dependencies.",
    code: `public class ServiceLocator
{
    private static Dictionary<Type, object> services = 
        new Dictionary<Type, object>();
    
    public static void Register<T>(T service)
    {
        var type = typeof(T);
        if (!services.ContainsKey(type))
        {
            services.Add(type, service);
        }
    }
    
    public static T Get<T>()
    {
        var type = typeof(T);
        if (services.ContainsKey(type))
        {
            return (T)services[type];
        }
        throw new Exception($"Service {type} not found");
    }
}

// Usage
public interface IAudioService
{
    void PlaySound(string name);
}

public class AudioManager : MonoBehaviour, IAudioService
{
    private void Awake()
    {
        ServiceLocator.Register<IAudioService>(this);
    }
    
    public void PlaySound(string name) { /* ... */ }
}

// Access anywhere
ServiceLocator.Get<IAudioService>().PlaySound("Jump");`
  },
  { 
    name: "Event System", 
    type: "Behavioral",
    description: "Decouples senders and receivers of events for flexible communication.",
    useCase: "Game events, UI updates, cross-system communication.",
    code: `public static class EventBus
{
    private static Dictionary<Type, Delegate> events = 
        new Dictionary<Type, Delegate>();
    
    public static void Subscribe<T>(Action<T> listener)
    {
        var type = typeof(T);
        if (!events.ContainsKey(type))
        {
            events[type] = listener;
        }
        else
        {
            events[type] = Delegate.Combine(events[type], listener);
        }
    }
    
    public static void Unsubscribe<T>(Action<T> listener)
    {
        var type = typeof(T);
        if (events.ContainsKey(type))
        {
            events[type] = Delegate.Remove(events[type], listener);
        }
    }
    
    public static void Publish<T>(T eventData)
    {
        var type = typeof(T);
        if (events.ContainsKey(type))
        {
            (events[type] as Action<T>)?.Invoke(eventData);
        }
    }
}

// Usage
public struct PlayerDeathEvent { public string Reason; }

EventBus.Subscribe<PlayerDeathEvent>(OnPlayerDeath);
EventBus.Publish(new PlayerDeathEvent { Reason = "Fall" });`
  },
  { 
    name: "Dependency Injection", 
    type: "Structural",
    description: "Injects dependencies into a class rather than having the class create them.",
    useCase: "Testable code, decoupled systems, flexible architecture.",
    code: `public interface IWeapon
{
    void Attack();
}

public class Sword : IWeapon
{
    public void Attack() 
    { 
        Debug.Log("Sword slash!"); 
    }
}

public class Gun : IWeapon
{
    public void Attack() 
    { 
        Debug.Log("Gun shoot!"); 
    }
}

// Constructor Injection
public class Player
{
    private IWeapon weapon;
    
    public Player(IWeapon weapon)
    {
        this.weapon = weapon;
    }
    
    public void Attack()
    {
        weapon.Attack();
    }
}

// Unity way - Property Injection
public class PlayerController : MonoBehaviour
{
    [SerializeField] private IWeapon weapon;
    
    public void SetWeapon(IWeapon newWeapon)
    {
        weapon = newWeapon;
    }
    
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            weapon?.Attack();
        }
    }
}`
  }
];

const AboutMe: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = React.useState<DesignPattern | null>(null);

  return (
    <AboutSection>
      <Container>
        <ContentWrapper>
          {/* Left Side - Profile */}
          <ProfileSection>
            <ProfileImage src={PersonalInfo.image} alt={PersonalInfo.name} />
            <Name>{PersonalInfo.name}</Name>
            <Role>{PersonalInfo.role}</Role>

            <SocialLinks>
              <SocialLink
                href={PersonalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <span>🐙</span>
              </SocialLink>
              <SocialLink
                href={PersonalInfo.links.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <span>💼</span>
              </SocialLink>
              <SocialLink
                href={PersonalInfo.links.itchIO}
                target="_blank"
                rel="noopener noreferrer"
                title="Itch.io"
              >
                <span>🎮</span>
              </SocialLink>
            </SocialLinks>

            <CVButton href={PersonalInfo.cvUri} download>
              📄 Download CV
            </CVButton>
          </ProfileSection>

          {/* Right Side - Info & Tech */}
          <InfoSection>
            <Description>{PersonalInfo.description}</Description>

            {/* Technical Skills */}
            <TechSection>
              <SectionTitle>Technical Skills</SectionTitle>
              <TechGrid>
                {techStack.map((tech, index) => (
                  <TechCard key={index}>
                    <TechCategory>
                      <span>{tech.icon}</span>
                      {tech.category}
                    </TechCategory>
                    <TechList>
                      {tech.items.map((item, i) => (
                        <TechItem key={i}>{item}</TechItem>
                      ))}
                    </TechList>
                  </TechCard>
                ))}
              </TechGrid>
            </TechSection>

            {/* Design Patterns */}
            <DesignPatternsSection>
              <SectionTitle>Design Patterns & Architectures</SectionTitle>
              <PatternGrid>
                {designPatterns.map((pattern, index) => (
                  <PatternBadge 
                    key={index}
                    onClick={() => setSelectedPattern(pattern)}
                  >
                    <PatternName>{pattern.name}</PatternName>
                    <PatternType>{pattern.type}</PatternType>
                    
                    {/* Preview tooltip khi hover */}
                    <PreviewTooltip className="preview-tooltip">
                      <PreviewText>
                        <strong>📝</strong> {pattern.description}
                      </PreviewText>
                      <ClickHint>👆 Click to view full code</ClickHint>
                    </PreviewTooltip>
                  </PatternBadge>
                ))}
              </PatternGrid>
            </DesignPatternsSection>
          </InfoSection>
        </ContentWrapper>
      </Container>

      {/* Modal popup giữa màn hình */}
      <Modal 
        isOpen={selectedPattern !== null} 
        onClick={() => setSelectedPattern(null)}
      >
        {selectedPattern && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedPattern(null)}>
              ✕ Close
            </CloseButton>
            
            <ModalTitle>{selectedPattern.name}</ModalTitle>
            <ModalType>{selectedPattern.type} Pattern</ModalType>
            
            <SectionBlock>
              <SectionLabel>📝 Description</SectionLabel>
              <SectionText>{selectedPattern.description}</SectionText>
            </SectionBlock>
            
            <SectionBlock>
              <SectionLabel>💡 Use Case</SectionLabel>
              <SectionText>{selectedPattern.useCase}</SectionText>
            </SectionBlock>
            
            <SectionBlock>
              <SectionLabel>💻 Implementation</SectionLabel>
              <CodeBlock>
                <code>{selectedPattern.code}</code>
              </CodeBlock>
            </SectionBlock>
          </ModalContent>
        )}
      </Modal>
    </AboutSection>
  );
};

export default AboutMe;