function spawnEnemies() {
    // 敵人生成：第二關生成頻率稍快
    let spawnRate = currentLevel === 1 ? 60 : 45;
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

        var newEnemy = createEnemy("enemy1", spawnX, spawnY);

        enemies.push({
            type: newEnemy.type,
            x: newEnemy.x,
            y: newEnemy.y,
            hp: newEnemy.hp,
            size: newEnemy.size,
            contactDamage: newEnemy.contactDamage,
            color: newEnemy.color,
            speed: newEnemy.speed
        });
    }
}
