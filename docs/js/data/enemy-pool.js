const ENEMY_POOL = {
    basic: {
        id: "basic",
        hp: 4,
        maxHp: 4,
        speed: 2.5,
        size: 30,
        contactDamage: 1,
        color: [255, 0, 0]
    },
    fast: {
        id: "fast",
        hp: 2,
        maxHp: 2,
        speed: 3.0,
        size: 20,
        contactDamage: 2,
        color: [255, 200, 0]
    },
    tank: {
        id: "tank",
        hp: 6,
        maxHp: 6,
        speed: 2.0,
        size: 50,
        contactDamage: 2,
        color: [0, 0, 255]
    }
};