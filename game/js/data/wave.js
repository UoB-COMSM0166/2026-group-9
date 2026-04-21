const WAVE_CONFIG = {
    1: {
        spawnRate: 60,
        enemyWeights: [
            {type: "basic", weight: 60},
            {type: "fast", weight: 20},
            {type: "tank", weight: 20},
        ]
    },
    2: {
        spawnRate: 45,
        enemyWeights: [
            {type: "basic", weight: 20},
            {type: "fast", weight: 35},
            {type: "tank", weight: 35},
            {type: "splitter", weight: 5},
            {type: "sprinter", weight: 5}
        ]
    },
    3: {
        spawnRate: 30,
        enemyWeights: [
            {type: "basic", weight: 10},
            {type: "fast", weight: 25},
            {type: "tank", weight: 25},
            {type: "splitter", weight: 20},
            {type: "sprinter", weight: 20}
        ]
    }
};
