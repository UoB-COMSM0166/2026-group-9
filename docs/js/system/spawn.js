function spawnEnemies() {
    // 敵人生成：第二關生成頻率稍快
    let spawnRate = currentLevel === 1 ? 60 : 45;
    if (frameCount % spawnRate === 0) {
        let angle = random(TWO_PI);
        enemies.push({
            x: player.x + cos(angle) * 400,
            y: player.y + sin(angle) * 400,
            size: 25,
            hp: currentLevel === 1 ? 3 : 5 // 第二關細菌變硬
        });
    }
}
