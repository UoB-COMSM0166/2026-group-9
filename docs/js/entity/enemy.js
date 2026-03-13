function createEnemy(type, x, y) {
    let template = ENEMY_POOL[type];

    return {
        type: template.id,
        x: x,
        y: y,
        hp: template.hp,
        maxHp: template.maxHp,
        size: template.size,
        contactDamage: template.contactDamage,
        color: template.color,
        speed: template.speed
    };
}

function moveEnemyTowardPlayer(enemy, player) {
    let enemyPos = createVector(enemy.x, enemy.y);
    let playerPos = createVector(player.x, player.y);
    let direction = p5.Vector.sub(playerPos, enemyPos);
    direction.normalize();

    // let spd = currentLevel === 1 ? enemy.speed : enemy.speed * 1.25;
    direction.mult(enemy.speed);

    enemy.x += direction.x;
    enemy.y += direction.y;
}

function damageEnemy(enemy, amount) {
    enemy.hp -= amount;
    if (enemy.hp < 0) enemy.hp = 0;
}
