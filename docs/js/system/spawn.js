function spawnEnemies() {
    // 敵人生成：第二關生成頻率稍快
    // 根據關卡調整生成頻率 (數字越小越快)
    let spawnRate = 60;
    if (currentLevel === 1) spawnRate = 60;
    else if (currentLevel === 2) spawnRate = 45;
    else if (currentLevel === 3) spawnRate = 30; // 第三關大幅增加生成速度

    if (frameCount % spawnRate === 0) {
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

        spawnX = constrain(spawnX, 0, WORLD_W - MARGIN_DISTANCE);
        spawnY = constrain(spawnY, 0, WORLD_H - MARGIN_DISTANCE);

        // 决定敌人种类
        var newEnemy;
        let seed = random(1, 100);
        let checkpoint;
        if (currentLevel === 1) {
            // checkpoint = 100;
            checkpoint = 10;
        } else if (currentLevel === 2) {
            checkpoint = 60;
        } else {
            checkpoint = 20;
        }
        if (seed <= checkpoint) {
            newEnemy = createEnemy("basic", spawnX, spawnY);
        } else {
            if (random() < 0.5) {
                newEnemy = createEnemy("fast", spawnX, spawnY);
            } else {
                newEnemy = createEnemy("tank", spawnX, spawnY);
            }
        }

        enemies.push({
            type: newEnemy.type,
            x: newEnemy.x,
            y: newEnemy.y,
            hp: newEnemy.hp,
            maxHp: newEnemy.maxHp,
            size: newEnemy.size,
            contactDamage: newEnemy.contactDamage,
            color: newEnemy.color,
            speed: newEnemy.speed
        });
    }
}
