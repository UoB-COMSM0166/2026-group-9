function spawnEnemies() {
    let config = WAVE_CONFIG[currentLevel];
    if (!config) return;

    if (frameCount % config.spawnRate === 0) {
        let spawnPos = getSpawnPosition();
        let enemyType = pickEnemyType(config.enemyWeights);
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

    if (candidates.length > 0) {
        let choice = random(candidates);

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
