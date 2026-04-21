function spawnEnemies() {
    if (gameState !== "PLAY") return;

    if (gameMode === "STORY") {
        let config = WAVE_CONFIG[currentLevel];
        if (!config) return;

        if (frameCount % config.spawnRate === 0) {
            let spawnPos = getSpawnPosition();
            let enemyType = pickEnemyType(config.enemyWeights);
            let newEnemy = createEnemy(enemyType, spawnPos.x, spawnPos.y);
            enemies.push(newEnemy);
        }
        return;
    }

    // --- Roguelike: 隨時間刷怪越來越多 ---
    const survivedSec = floor(rogue.survivedFrames / 60);
    const difficulty = floor(survivedSec / 20); // 每 20 秒提升一段

    // 生成頻率：從 45f 開始，逐步降到 10f
    const spawnRateFrames = max(10, 45 - difficulty * 3);
    if (frameCount % spawnRateFrames !== 0) return;

    // 每次生成的數量：1 -> 2 -> 3...
    const batch = 1 + floor(difficulty / 2);

    // 敵人種類權重（越後面越難）
    const weights = [
        { type: "basic", weight: max(10, 55 - difficulty * 5) },
        { type: "fast", weight: min(35, 20 + difficulty * 3) },
        { type: "tank", weight: min(35, 15 + difficulty * 2) },
        { type: "splitter", weight: min(20, difficulty * 2) },
        { type: "sprinter", weight: min(20, max(0, (difficulty - 2) * 2)) }
    ].filter(w => w.weight > 0);

    for (let n = 0; n < batch; n++) {
        let spawnPos = getSpawnPosition();
        let enemyType = pickEnemyType(weights);
        let newEnemy = createEnemy(enemyType, spawnPos.x, spawnPos.y);
        enemies.push(newEnemy);
    }
}

function getSpawnPosition() {
    let angle, spawnX, spawnY;
    let isValidSpawn = false;
    let maxAttempts = 10;

    while (!isValidSpawn && maxAttempts > 0) {
        angle = random(TWO_PI);
        spawnX = player.x + cos(angle) * SPAWN_DISTANCE;
        spawnY = player.y + sin(angle) * SPAWN_DISTANCE;

        if (spawnX >= 0 && spawnX <= WORLD_W - MARGIN_DISTANCE &&
            spawnY >= 0 && spawnY <= WORLD_H - MARGIN_DISTANCE) {
            isValidSpawn = true;
        }
        maxAttempts--;
    }

    return {
        x: constrain(spawnX, 0, WORLD_W - MARGIN_DISTANCE),
        y: constrain(spawnY, 0, WORLD_H - MARGIN_DISTANCE)
    };
}

function pickEnemyType(enemyWeights) {
    let roll = random(100);
    let curr = 0;

    for (let item of enemyWeights) {
        curr += item.weight;
        if (roll <= curr) {
            return item.type;
        }
    }

    return enemyWeights[0].type;
}

function spawnDeathParticles(x, y, color) {
    // 粒子数量
    let count = 10;
    for (let i = 0; i < count; i++) {
        let angle = random(TWO_PI);
        let speed = random(3, 6);

        particles.push({
            x: x,
            y: y,
            spdX: cos(angle) * speed,
            spdY: sin(angle) * speed,
            life: 300,
            color: color,
            size: random(3, 6)
        });
    }
}
