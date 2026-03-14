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
        flashTimer: 0
    },
    fast: {
        id: "fast",
        shape: "triangle",
        hp: 2,
        maxHp: 2,
        speed: 3.0,
        size: 30,
        contactDamage: 2,
        color: [255, 100, 0],
        flashTimer: 0
    },
    tank: {
        id: "tank",
        shape: "rect",
        hp: 6,
        maxHp: 6,
        speed: 2.0,
        size: 50,
        contactDamage: 2,
        color: [0, 0, 255],
        flashTimer: 0
    }
};