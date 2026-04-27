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


    const survivedSec = floor(rogue.survivedFrames / 60);
    const difficulty = floor(survivedSec / 20);


    const spawnRateFrames = max(10, 45 - difficulty * 3);
    if (frameCount % spawnRateFrames !== 0) return;


    const batch = 1 + floor(difficulty / 2);


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
    let cam = getCameraOffset();
    let viewLeft = -cam.x;
    let viewTop = -cam.y;
    let viewRight = viewLeft + width;
    let viewBottom = viewTop + height;
    let candidates = [];
    let verticalMin = max(MARGIN_DISTANCE, viewTop);
    let verticalMax = min(WORLD_H - MARGIN_DISTANCE, viewBottom);
    let horizontalMin = max(MARGIN_DISTANCE, viewLeft);
    let horizontalMax = min(WORLD_W - MARGIN_DISTANCE, viewRight);

    if (viewLeft - MARGIN_DISTANCE >= MARGIN_DISTANCE) {
        candidates.push({
            side: "left",
            x: viewLeft - MARGIN_DISTANCE,
            yMin: verticalMin,
            yMax: verticalMax
        });
    }

    if (viewRight + MARGIN_DISTANCE <= WORLD_W - MARGIN_DISTANCE) {
        candidates.push({
            side: "right",
            x: viewRight + MARGIN_DISTANCE,
            yMin: verticalMin,
            yMax: verticalMax
        });
    }

    if (viewTop - MARGIN_DISTANCE >= MARGIN_DISTANCE) {
        candidates.push({
            side: "top",
            xMin: horizontalMin,
            xMax: horizontalMax,
            y: viewTop - MARGIN_DISTANCE
        });
    }

    if (viewBottom + MARGIN_DISTANCE <= WORLD_H - MARGIN_DISTANCE) {
        candidates.push({
            side: "bottom",
            xMin: horizontalMin,
            xMax: horizontalMax,
            y: viewBottom + MARGIN_DISTANCE
        });
    }
    // randomly select a candidate
    if (candidates.length > 0) {
        let choice = random(candidates);
        // decide generation location
        if (choice.side === "left" || choice.side === "right") {
            return {
                x: choice.x,
                y: random(choice.yMin, choice.yMax)
            };
        }

        return {
            x: random(choice.xMin, choice.xMax),
            y: choice.y
        };
    }

    return {
        x: constrain(player.x + SPAWN_DISTANCE, MARGIN_DISTANCE, WORLD_W - MARGIN_DISTANCE),
        y: constrain(player.y, MARGIN_DISTANCE, WORLD_H - MARGIN_DISTANCE)
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
    // number of particles
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
