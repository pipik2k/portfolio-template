export interface TechStackItem {
  category: string;
  icon: string;
  items: string[];
}

export interface DesignPattern {
  name: string;
  type: string;
  description: string;
  code: string;
  useCase: string;
}

export interface OptimizationTechnique {
  name: string;
  category: string;
  description: string;
  impact: string;
  steps: string[];
  imageContext: string;
  imageFile: string;
}

export interface PersonalInfoType {
    name: string;
    role: string;
    description: string;
    image: string;
    cvUri: string;
}


export const PersonalInfo: PersonalInfoType = {
    name: "PiPiK",
    role: "Game Programmer",
    description: "These are some techniques and design patterns i've used in my projects",
    image: "/images/Profile.jpg",
    cvUri: "/CV.pdf"
};

export const techStack: TechStackItem[] = [
    { category: "Language Program", icon: "📚", items: ["C# (Unity)"] },
    { category: "Tools", icon: "⚙️", items: ["Unity Engine", "Git/Git LFS", "ShaderGraph", "DOTS", "Jobs System"] },
    { category: "Technique", icon: "⚙️", items: ["Refactor","Clean Code","SOLID Principle"] },
];

export const designPatterns: DesignPattern[] = [
    {
        name: "Singleton", 
        type: "Creational",
        description: "Đảm bảo một lớp chỉ có một thể hiện duy nhất và cung cấp một điểm truy cập toàn cục tới nó.",
        useCase: "Phù hợp cho GameManager, AudioManager, hoặc bất kỳ hệ thống nào chỉ nên có một instance.",
        code: ` public abstract class Singleton<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T _instance;
    public static T Instance
    {
        get
        {
            if (_instance == null)
            {
                _instance = FindObjectOfType<T>();

                if (_instance == null)
                {
                    GameObject go = new GameObject(typeof(T).Name);
                    _instance = go.AddComponent<T>();
                }
            }
            return _instance;
        }
    }

    protected virtual void Awake()
    {
        if (_instance == null)
        {
            _instance = this as T;
            DontDestroyOnLoad(gameObject);
        }
        else if (_instance != this)
        {
            Destroy(gameObject);
        }
    }
}`
    },

    {
        name: "Object Pool", 
        type: "Creational",
        description: "Tái sử dụng các đối tượng thay vì tạo mới và hủy chúng liên tục, giúp cải thiện hiệu suất.",
        useCase: "Thiết yếu cho đạn, hiệu ứng hạt, kẻ thù, hoặc bất kỳ đối tượng nào được sinh ra thường xuyên.",
        code: `public class ObjectPool : ServicePrefab
{
    [SerializeField] 
    private bool dontDestroyonLoad;

    private GameObject emptyHolder;

    private GameObject particleSystemHolder;
    private GameObject gameObjectHolder;
    private GameObject soundFxHolder;

    private Dictionary<GameObject, ObjectPool<GameObject>> objectPools;
    private Dictionary<GameObject, GameObject> clonePrefabMap;

    public enum PoolType
    {
        GameObject,
        Particle,
        SoundFx
    }

    public PoolType PoolingType;

    public override void OnAwake()
    {
        base.OnAwake();
        objectPools = new Dictionary<GameObject, ObjectPool<GameObject>>();
        clonePrefabMap = new Dictionary<GameObject, GameObject>();

        SetUpHolder();
    }

    private void SetUpHolder()
    {
        emptyHolder = new GameObject("Object_Pool");

        gameObjectHolder = new GameObject("GameObjects");
        gameObjectHolder.transform.SetParent(emptyHolder.transform);

        particleSystemHolder = new GameObject("ParticleSystems");
        particleSystemHolder.transform.SetParent(emptyHolder.transform);

        soundFxHolder = new GameObject("SoundFX");
        soundFxHolder.transform.SetParent(emptyHolder.transform);
    }

    public void CreatePool(GameObject gameObject, Vector3 pos, Quaternion rot, PoolType poolType = PoolType.GameObject)
    {
        ObjectPool<GameObject> pool = new ObjectPool<GameObject>(
            createFunc: ()=> CreateObject(gameObject,pos,rot,poolType),
            actionOnGet:OnGetObject,
            actionOnRelease:OnReleaseObject,
            actionOnDestroy:OnDestroyObject
            );

        objectPools.Add(gameObject,pool);
    }

    public GameObject CreateObject(GameObject gameObject, Vector3 pos, Quaternion rot, PoolType poolType = PoolType.GameObject)
    {
        gameObject.SetActive(false);
        GameObject obj = Instantiate(gameObject, pos, rot);
        gameObject.SetActive(true);

        GameObject parent = SetParentObject(poolType);
        obj.transform.SetParent(parent.transform);

        return obj;
    }

    private GameObject SetParentObject(PoolType poolType)
    {
        switch (poolType)
        {
            case PoolType.GameObject:
                return gameObjectHolder;
            case PoolType.Particle:
                return particleSystemHolder;
            case PoolType.SoundFx:
                return soundFxHolder;
            default:
                return null;
        }
    }

    public void OnGetObject(GameObject gameObject)
    {

    }
    public void OnReleaseObject(GameObject gameObject)
    {
        gameObject.SetActive(false);
    }
    public void OnDestroyObject(GameObject gameObject)
    {
        if (clonePrefabMap.ContainsKey(gameObject))
        {
            clonePrefabMap.Remove(gameObject);
        }
    }

    public T SpawnObject<T>(GameObject objectToSpawn, Vector3 pos, Quaternion rot, PoolType poolType = PoolType.GameObject) where T : UnityEngine.Object
    {
        if(!objectPools.ContainsKey(objectToSpawn))
        {
            CreatePool(objectToSpawn, pos, rot, poolType);
        }

        GameObject obj = objectPools[objectToSpawn].Get();

        if (obj != null)
        {
                if (!clonePrefabMap.ContainsKey(obj))
                {
                    clonePrefabMap.Add(obj, objectToSpawn);
                }
                obj.transform.position = pos;
                obj.transform.rotation = rot;
                obj.SetActive(true);           

            if (typeof(T) == typeof(GameObject))
            {
                return obj as T;
            }
            T component = obj.GetComponent<T>();
            if (component == null)
            {
                return null;
            }
            return component;
        }
        return null;
    }


    public T SpawnObject<T>(T TypePrefab, Vector3 pos, Quaternion rot, PoolType poolType = PoolType.GameObject) where T : Component
    {
        return SpawnObject<T>(TypePrefab.gameObject, pos, rot, poolType);
    }

    public GameObject SpawnObject(GameObject gameObject, Vector3 pos, Quaternion rot, PoolType poolType = PoolType.GameObject)
    {
        return SpawnObject<GameObject>(gameObject, pos, rot, poolType);
    }

    public void ReturnObjectToPool(GameObject gameObject,PoolType poolType = PoolType.GameObject)
    {
        if(clonePrefabMap.TryGetValue(gameObject,out GameObject prefab))
        {
            GameObject parentObj = SetParentObject(poolType);

            if(gameObject.transform.parent != parentObj.transform)
            {
                gameObject.transform.SetParent(parentObj.transform);
            }

            if (objectPools.TryGetValue(prefab, out ObjectPool<GameObject> pool))
            {
                if(gameObject.activeInHierarchy)
                pool.Release(gameObject);
            }
        }
        else
        {
            Debug.LogWarning("no thing to return");
        }
    }
}`

    },

    {
        name: "State Machine", 
        type: "Behavioral",
        description: "Cho phép một đối tượng thay đổi hành vi của nó khi trạng thái nội bộ thay đổi.",
        useCase: "Hoàn hảo cho AI của nhân vật, trạng thái trò chơi, bộ điều khiển hoạt hình.",
        code: `public class StateMachine { /* ... */ }`
    },

    {
        name: "Behavior Tree",
        type: "Behavioral",
        description: "Tạo trạng thái hành vi cho enemy .",
        useCase: "Hoàn hảo cho AI enemy có độ phức tạp cao.",
        code:
`public abstract class Composite : Node
{
    protected List<Node> Children;

    public Composite(string name, List<Node> children = null) : base(name)
    {
        Children = children ?? new List<Node>();
    }

    public void AddChild(Node child)
    {
        Children.Add(child);
    }
}

public class Sequence : Composite
{
    public Sequence(string name, List<Node> children = null) : base(name, children) { }

    public override Status Tick(AgentState state)
    {
        foreach (var child in Children)
        {
            CurrentStatus = child.Tick(state);
            if (CurrentStatus != Status.SUCCESS)
            {
                return CurrentStatus;
            }
        }
        
        CurrentStatus = Status.SUCCESS;
        return CurrentStatus;
    }
}

public class Selector : Composite
{
    public Selector(string name, List<Node> children = null) : base(name, children) { }

    public override Status Tick(AgentState state)
    {
        foreach (var child in Children)
        {
            CurrentStatus = child.Tick(state);
            
            if (CurrentStatus != Status.FAILURE)
            {
                return CurrentStatus;
            }
        }
        
        CurrentStatus = Status.FAILURE;
        return CurrentStatus;
    }
}`
    },

    {
        name: "Command",
        type: "Behavioral",
        description: "Đóng gói một yêu cầu thành một đối tượng riêng biệt, cho phép lưu lịch sử, undo/redo và tách biệt người gọi với logic thực thi.",
        useCase: "Rất phù hợp cho input system, điều khiển nhân vật, skill, combo, undo/redo hành động.",
        code: `
public interface ICommand
{
    void Execute();
    void Undo();
}

public class MoveCommand : ICommand
{
    private Transform player;
    private Vector3 direction;
    private float speed;

    public MoveCommand(Transform player, Vector3 direction, float speed)
    {
        this.player = player;
        this.direction = direction;
        this.speed = speed;
    }

    public void Execute()
    {
        player.position += direction * speed * Time.deltaTime;
    }

    public void Undo()
    {
        player.position -= direction * speed * Time.deltaTime;
    }
}

public class InputHandler
{
    private Stack<ICommand> commandHistory = new Stack<ICommand>();

    public void HandleCommand(ICommand command)
    {
        command.Execute();
        commandHistory.Push(command);
    }

    public void Undo()
    {
        if (commandHistory.Count > 0)
            commandHistory.Pop().Undo();
    }
}`
    },

    {
        name: "Factory",
        type: "Creational",
        description: "Cung cấp một interface để tạo object, nhưng cho phép lớp con quyết định instance cụ thể nào được tạo.",
        useCase: "Tạo enemy, bullet, item, skill mà không cần phụ thuộc trực tiếp vào class cụ thể.",
        code: `
public abstract class Enemy
{
    public abstract void Attack();
}

public class MeleeEnemy : Enemy
{
    public override void Attack()
    {
        Debug.Log("Melee Attack");
    }
}

public class RangeEnemy : Enemy
{
    public override void Attack()
    {
        Debug.Log("Range Attack");
    }
}

public static class EnemyFactory
{
    public static Enemy CreateEnemy(string type)
    {
        switch (type)
        {
            case "Melee":
                return new MeleeEnemy();
            case "Range":
                return new RangeEnemy();
            default:
                return null;
        }
    }
}`
    },
    {
        name: "Flyweight",
        type: "Structural",
        description: "Chia sẻ dữ liệu chung giữa nhiều object để giảm bộ nhớ sử dụng.",
        useCase: "Rất hiệu quả cho bullet, tile map, cây cối, NPC đông số lượng lớn.",
        code: `
public class BulletData
{
    public float speed;
    public int damage;

    public BulletData(float speed, int damage)
    {
        this.speed = speed;
        this.damage = damage;
    }
}

public static class BulletDataFactory
{
    private static Dictionary<string, BulletData> cache = new Dictionary<string, BulletData>();

    public static BulletData Get(string type)
    {
        if (!cache.ContainsKey(type))
        {
            if (type == "Normal")
                cache[type] = new BulletData(10f, 1);
            else if (type == "Heavy")
                cache[type] = new BulletData(6f, 3);
        }
        return cache[type];
    }
}`
    },

    {
        name: "Observer",
        type: "Behavioral",
        description: "Cho phép nhiều đối tượng theo dõi và phản ứng khi một đối tượng khác thay đổi trạng thái.",
        useCase: "UI update, player health, achievement, quest system.",
        code: `
public interface IObserver
{
    void OnNotify();
}

public class Subject
{
    private List<IObserver> observers = new List<IObserver>();

    public void Subscribe(IObserver observer)
    {
        observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        observers.Remove(observer);
    }

    public void Notify()
    {
        foreach (var observer in observers)
            observer.OnNotify();
    }
}

public class HealthUI : IObserver
{
    public void OnNotify()
    {
        Debug.Log("Update Health UI");
    }
}`
    },


    {
        name: "Event Bus",
        type: "Behavioral",
        description: "Trung tâm phân phối sự kiện giúp các hệ thống giao tiếp mà không phụ thuộc trực tiếp vào nhau.",
        useCase: "Game flow, analytics, audio, UI, achievement, decouple hệ thống lớn.",
        code: `
public static class EventBus
{
    private static Dictionary<Type, Action<object>> events = new Dictionary<Type, Action<object>>();

    public static void Subscribe<T>(Action<T> callback)
    {
        Type type = typeof(T);

        if (!events.ContainsKey(type))
            events[type] = delegate { };

        events[type] += (obj) => callback((T)obj);
    }

    public static void Unsubscribe<T>(Action<T> callback)
    {
        Type type = typeof(T);

        if (events.ContainsKey(type))
            events[type] -= (obj) => callback((T)obj);
    }

    public static void Publish<T>(T eventData)
    {
        Type type = typeof(T);

        if (events.ContainsKey(type))
            events[type].Invoke(eventData);
    }
}

public struct PlayerDeadEvent { }
`
    },
    {
        name: "Strategy",
        type: "Behavioral",
        description: "Cho phép định nghĩa một tập các thuật toán và hoán đổi chúng với nhau tại runtime mà không cần sửa code của đối tượng sử dụng.",
        useCase: "Thay đổi hành vi AI, cách tấn công, di chuyển, damage calculation, skill logic.",
        code: `
public interface IAttackStrategy
{
    void Attack(Transform origin);
}

public class MeleeAttack : IAttackStrategy
{
    public void Attack(Transform origin)
    {
        Debug.Log("Melee Attack from " + origin.name);
    }
}

public class RangeAttack : IAttackStrategy
{
    public void Attack(Transform origin)
    {
        Debug.Log("Range Attack from " + origin.name);
    }
}

public class Enemy : MonoBehaviour
{
    private IAttackStrategy attackStrategy;

    public void SetAttackStrategy(IAttackStrategy strategy)
    {
        attackStrategy = strategy;
    }

    public void Attack()
    {
        attackStrategy?.Attack(transform);
    }
}`
    },
    {
        name: "Composition Over Inheritance",
        type: "Principle",
        description: "Ưu tiên kết hợp các hành vi nhỏ (composition) thay vì kế thừa lớp cha cồng kềnh, giúp code linh hoạt, dễ mở rộng và bảo trì.",
        useCase: "Player/Enemy modular, skill system, weapon system, AI behavior, movement system.",
        code: `
public interface IMovable
{
    void Move(Vector3 direction);
}

public interface IDamageable
{
    void TakeDamage(int amount);
}

public class SimpleMovement : IMovable
{
    private Transform transform;
    private float speed;

    public SimpleMovement(Transform transform, float speed)
    {
        this.transform = transform;
        this.speed = speed;
    }

    public void Move(Vector3 direction)
    {
        transform.position += direction * speed * Time.deltaTime;
    }
}

public class Health : IDamageable
{
    public int CurrentHP { get; private set; } = 100;

    public void TakeDamage(int amount)
    {
        CurrentHP -= amount;
        Debug.Log("HP: " + CurrentHP);
    }
}

public class Player : MonoBehaviour
{
    private IMovable movement;
    private IDamageable health;

    private void Awake()
    {
        movement = new SimpleMovement(transform, 5f);
        health = new Health();
    }

    private void Update()
    {
        movement.Move(Vector3.forward);

        if (Input.GetKeyDown(KeyCode.Space))
            health.TakeDamage(10);
    }
}`
    },

];

export const optimizationTechniques: OptimizationTechnique[] = [
    {
      name: "Static Batching",
      category: "Draw Call Reduction",
      description: "Kết hợp hình học của nhiều đối tượng tĩnh thành một lưới duy nhất khi build, giảm đáng kể lệnh vẽ (Draw Calls).",
      impact: "Giảm Draw Calls, cải thiện hiệu suất CPU.",
      steps: ["Đánh dấu các đối tượng là 'Static' trong Inspector.", "Đảm bảo các đối tượng chia sẻ cùng một Material và Shader."],
      imageContext: "Cài đặt 'Static' trong Inspector.",
      imageFile: "static-batching.png", 
    },
    {
      name: "Texture Compression",
      category: "Memory Usage",
      description: "Giảm dung lượng bộ nhớ Texture và kích thước file bằng cách sử dụng các thuật toán nén như ASTC.",
      impact: "Giảm sử dụng VRAM (bộ nhớ GPU), cải thiện thời gian tải.",
      steps: ["Set Texture Type là 'Default'.", "Chọn Format nén (ví dụ: ASTC) trong Texture Importer."],
      imageContext: "Texture Import Settings",
      imageFile: "texture-settings.png", 
    },
    {
      name: "GPU Instancing",
      category: "Draw Call Reduction",
      description: "Cho phép GPU vẽ nhiều bản sao (instances) của cùng một Mesh/Material trong một Draw Call duy nhất.",
      impact: "Giảm đáng kể Draw Calls khi vẽ các đối tượng giống nhau (cây cối, cỏ, bụi đá).",
      steps: ["Sử dụng Shader hỗ trợ Instancing.", "Đánh dấu ô 'Enable Instancing' trên Material."],
      imageContext: "Instancing Material Settings",
      imageFile: "gpu-instancing.png", 
    },
    {
      name: "Audio Compression",
      category: "Memory & Load Time",
      description: "Sử dụng các định dạng nén phù hợp để giảm kích thước bộ nhớ âm thanh và băng thông I/O. Compress 50% không gây ra quá nhiều sự khác biệt về âm thanh ở mobile",
      impact: "Giảm đáng kể bộ nhớ RAM sử dụng cho âm thanh và tốc độ load scene.",
      steps: ["Trong Audio Importer, chọn 'Compression Format' phù hợp.", "Thiết lập 'Load Type' hợp lý."],
      imageContext: "Audio Import Settings Compression Format",
      imageFile: "audio-compression.png", 
    },
    {
      name: "Profiler: CPU Analysis",
      category: "Analysis & Debugging",
      description: "Phân tích thời gian CPU của từng hàm (Scripts), Rendering, Physics để xác định nút cổ chai chính đang chiếm Frame Time.",
      impact: "Phát hiện chính xác logic game hoặc hệ thống nào đang làm chậm game.",
      steps: ["Mở Profiler và kết nối với Development Build.", "Theo dõi biểu đồ CPU Usage và phân tích cây phân cấp."],
      imageContext: "Unity Profiler CPU Usage Chart and Hierarchy",
      imageFile: "profiler-cpu.png", 
    },
    {
      name: "Profiler: Memory Analysis",
      category: "Analysis & Debugging",
      description: "Sử dụng Profiler để theo dõi việc sử dụng bộ nhớ (VRAM, RAM) của Textures, Meshes và các đối tượng Game.",
      impact: "Giúp tối ưu hóa VRAM/RAM, ngăn ngừa crash do hết bộ nhớ trên thiết bị.",
      steps: ["Sử dụng chức năng 'Take Sample' hoặc 'Take Snapshot' trong Memory Profiler.", "Phân tích 'Used By Objects' và 'Assets'."],
      imageContext: "Unity Profiler Memory Snapshot and Texture breakdown",
      imageFile: "profiler-memory.png", 
    },
    {
        name: "Mobile Shader Optimization",
        category: "Rendering/GPU",
        description: "Ưu tiên sử dụng các Shader tối giản, không phức tạp (ví dụ: Unlit, Diffuse, Mobile/VertexLit) thay vì các Standard Shader nặng. Điều này giảm thiểu tính toán trên GPU, đặc biệt quan trọng với chip di động.",
        impact: "Giảm đáng kể thời gian Render Frame (SetPass Calls, Draw Calls), cải thiện FPS trên các thiết bị cấp thấp.",
        steps: [
            "Sử dụng Built-in Mobile Shaders hoặc Shaders được tối ưu hóa bằng Shader Graph (chỉ bật các tính năng cần thiết).",
            "Tắt các tính năng không cần thiết như Shadows, Realtime Reflections, Multi-pass rendering.",
            "Nên sử dụng các Shaders chỉ tính toán trong Vertex (VertexLit) thay vì Pixel (Fragment) nếu có thể.",
        ],
        imageFile: "mobile-shader.png",
        imageContext: "Biểu đồ so sánh chi phí Shader (Overdraw & Complexity).",
    },
    {
        name: "TextMesh Pro (TMP) Usage",
        category: "UI/Batching",
        description: "TextMesh Pro (TMP) thay thế cho UI Text truyền thống vì TMP sử dụng kỹ thuật Font Atlas và Dynamic Batching hiệu quả hơn. Điều này giúp giảm thiểu Draw Calls cho các phần tử Text.",
        impact: "Cải thiện tốc độ xây dựng UI (Canvas rebuild) và giảm Draw Calls do Text.",
        steps: [
            "Luôn sử dụng TextMesh Pro cho mọi phần tử Text trong game (thay vì Text legacy).",
            "Sử dụng chung một Font Atlas giữa các TextMesh Pro components để tăng khả năng Batching.",
            "Tránh thay đổi màu sắc hoặc kích thước Text quá thường xuyên nếu không cần thiết, vì nó có thể gây rebuild Canvas.",
        ],
        imageFile: "textmeshpro.png",
        imageContext: "So sánh hiệu suất giữa Text Mesh Pro và Legacy Text.",
    },
    {
        name: "Disable Raycast Target (UI)",
        category: "UI/Performance",
        description: "Đối với các phần tử UI chỉ mang tính trang trí (decoration) hoặc nằm dưới các nút bấm khác, việc tắt 'Raycast Target' sẽ ngăn chúng nhận sự kiện Input. Điều này giúp hệ thống Input của Unity (Graphics Raycaster) làm việc nhanh hơn.",
        impact: "Giảm đáng kể chi phí tính toán Raycast trên mỗi Frame, đặc biệt khi có nhiều element trong Canvas.",
        steps: [
            "Chọn phần tử UI không tương tác (ví dụ: ảnh nền, icon, text tĩnh).",
            "Trong Component 'Image' hoặc 'Text', bỏ chọn (Uncheck) tùy chọn 'Raycast Target'.",
            "Chỉ bật 'Raycast Target' cho các nút bấm (Button), Toggle, Slider hoặc các element cần phản hồi Input.",
        ],
        imageFile: "disable-raycast.png",
        imageContext: "Giao diện Inspector khi tắt Raycast Target.",
    },
    {
        name: "Multi-threaded Rendering (MTR)",
        category: "Rendering/CPU",
        description: "Kích hoạt tính năng này cho phép Unity sử dụng nhiều luồng CPU (Multi-threads) để chuẩn bị và gửi lệnh vẽ (Draw Calls) tới GPU, thay vì chỉ dùng Main Thread. Điều này đặc biệt quan trọng để tránh tình trạng 'CPU-bound'.",
        impact: "Giảm gánh nặng xử lý Rendering trên Main Thread, tăng tốc độ tổng thể của Frame và cải thiện FPS.",
        steps: [
            "Mở Player Settings (Edit -> Project Settings -> Player).",
            "Trong phần 'Other Settings', tìm và bật tùy chọn 'Multithreaded Rendering'.",
            "Lưu ý: Chỉ khả dụng trên các nền tảng hỗ trợ (Mobile, PC) và có thể gây ra lỗi nếu code không 'thread-safe'.",
        ],
        imageFile: "multithread-rendering.png", // 
        imageContext: "Giao diện Player Settings khi bật Multithreaded Rendering.",
    },
    {
        name: "Lightmap Encoding (Lưu trữ Lightmap)",
        category: "Memory/Rendering",
        description: "Điều chỉnh cách các Lightmap được lưu trữ. Việc sử dụng định dạng nén (ví dụ: Low Quality/Compressed) thay vì định dạng không nén (High Quality/RGBM) giúp giảm đáng kể dung lượng Lightmap trong bộ nhớ.",
        impact: "Giảm dung lượng bộ nhớ VRAM và dung lượng file Build game, tăng tốc độ tải Scene.",
        steps: [
            "Mở Lighting Settings (Window -> Rendering -> Lighting).",
            "Trong tab 'Baked Lightmaps', tìm phần 'Lightmap Settings'.",
            "Thay đổi 'Lightmap Encoding' từ High Quality (RGBM) sang 'Low Quality' hoặc 'Compressed' (Linear).",
        ],
        imageFile: "lightmap-encoding.png", // 
        imageContext: "Giao diện Lighting Settings khi điều chỉnh Lightmap Encoding.",
    },
];