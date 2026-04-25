const ENEMY_POOL = {
    basic: {
        id: "basic",
        shape: "circle",
        hp: 4,
        maxHp: 4,
        speed: 2.5,
        size: 36,
        contactDamage: 1,
        color: [239, 227, 175],
        flashTimer: 0,
        imgKey: "enemy1"
    },
    fast: {
        id: "fast",
        shape: "triangle",
        hp: 2,
        maxHp: 2,
        speed: 3.5,
        size: 30,
        contactDamage: 1,
        color: [255, 201, 13],
        flashTimer: 0,
        imgKey: "enemy2"
    },
    tank: {
        id: "tank",
        shape: "rect",
        hp: 7,
        maxHp: 7,
        speed: 2.0,
        size: 63,
        contactDamage: 2,
        color: [153, 217, 234],
        flashTimer: 0,
        imgKey: "enemy3"
     },
    splitter: {
        id: "splitter",
        shape: "circle",
        hp: 5,
        maxHp: 5,
        speed: 2.0,
        size: 56,
        contactDamage: 2,
        color: [255, 174, 201],
        splitCount: 2,
        imgKey: "enemy4"
    },
    sprinter: {
        id: "sprinter",
        shape: "triangle",
        hp: 6,
        maxHp: 6,
        speed: 1.6,
        size: 48,
        contactDamage: 3,
        color: [15, 223, 235],
        sprintSpeed: 4.8,
        sprintPeriod: 25,
        imgKey: "enemy5"
    }
};