function createEnemy(type, x, y) {
    let template = ENEMY_POOL[type];

    return {
        type: template.id,
        shape: template.shape,
        x: x,
        y: y,
        hp: template.hp,
        maxHp: template.maxHp,
        size: template.size,
        contactDamage: template.contactDamage,
        color: template.color,
        speed: template.speed,

        splitCount: template.splitCount || 0,

        sprintPeriod: template.sprintPeriod || 0,
        sprintSpeed: template.sprintSpeed,
        sprintTimer: 0,
        sprintDx: 0,
        sprintDy: 0,
        // add for image
        imgKey: template.imgKey, 
    
        // add for image
        flashTimer: template.flashTimer || 0 
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
    enemy.flashTimer = 18;

    if (enemy.hp < 0) {
        enemy.hp = 0;
    }
}

function moveSprinter(enemy, player) {
    enemy.sprintTimer++;

    if (enemy.sprintTimer >= enemy.sprintPeriod) {
        let enemyPos = createVector(enemy.x, enemy.y);
        let playerPos = createVector(player.x, player.y);
        let direction = p5.Vector.sub(playerPos, enemyPos);
        direction.normalize();
        enemy.sprintDx = direction.x;
        enemy.sprintDy = direction.y;
        enemy.sprintTimer -= enemy.sprintPeriod * 6;
    }

    if (enemy.sprintTimer < 0) {
        enemy.x += enemy.sprintDx * enemy.sprintSpeed;
        enemy.y += enemy.sprintDy * enemy.sprintSpeed;
    } else {
        moveEnemyTowardPlayer(enemy, player);
    }
}