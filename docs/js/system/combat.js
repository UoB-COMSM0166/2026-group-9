function updateObjects() {
    updateBullets();
    updateEnemiesAndCombat();
}

function updateBullets() {
    // 子彈移動
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].x += bullets[i].vx;
        bullets[i].y += bullets[i].vy;
        if (bullets[i].x < 0 || bullets[i].x > WORLD_W || bullets[i].y < 0 || bullets[i].y > WORLD_H) {
            bullets.splice(i, 1);
        }
    }
}

function updateEnemiesAndCombat() {
    // 敵人追逐與碰撞
    for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];
        moveEnemyTowardPlayer(e, player);
        // 被子彈擊中
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (dist(bullets[j].x, bullets[j].y, e.x, e.y) < e.size / 2 + 5) {
                //此处参数'amount'应传入武器伤害，由于武器模块未完成，此处暂时用字面量代替
                damageEnemy(e, 2);
                bullets.splice(j, 1);
                break;
            }
        }
        // 與玩家碰撞
        let dPlayer = dist(player.x, player.y, e.x, e.y);
        if (dPlayer < (player.size + e.size) / 2) {
            player.hp--;
            enemies.splice(i, 1);

            shakeTimer = 10;
            redMaskAlpha = 150;

        } else if (e.hp <= 0) {
            spawnDeathParticles(e.x, e.y, e.color);
            enemies.splice(i, 1);
            killCount++; // 擊殺數增加
        }
    }
}

