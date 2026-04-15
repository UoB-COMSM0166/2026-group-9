const ENEMY_POOL = {
    basic: {
        id: "basic",
        shape: "circle",
        hp: 4,
        maxHp: 4,
        speed: 2.5,
        size: 30,
        contactDamage: 1,
        color: [255, 0, 0],
        flashTimer: 0,
        imgKey: "enemy1" //new add for image
    },
    fast: {
        id: "fast",
        shape: "triangle",
        hp: 2,
        maxHp: 2,
        speed: 3.0,
        size: 27,
        contactDamage: 1,
        color: [255, 100, 0],
        flashTimer: 0,
        imgKey: "enemy2" //new for image 
    },
    tank: {
        id: "tank",
        shape: "rect",
        hp: 7,
        maxHp: 7,
        speed: 2.0,
        size: 50,
        contactDamage: 2,
        color: [0, 0, 255],
        flashTimer: 0,
        imgKey: "enemy3"   //new add for image
     },
    splitter: {
        id: "splitter",
        shape: "circle",
        hp: 5,
        maxHp: 5,
        speed: 2.0,
        size: 40,
        contactDamage: 2,
        color: [180, 0, 255],
        splitCount: 2,
        imgKey: "enemy4"    //new 
    },
    sprinter: {
        id: "sprinter",
        shape: "triangle",
        hp: 6,
        maxHp: 6,
        speed: 1.6,
        size: 42,
        contactDamage: 3,
        color: [255, 40, 120],
        sprintSpeed: 4.8,
        sprintPeriod: 25,
        imgKey: "enemy5" //new
    }
};