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
    // enemies chase and collide
    for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];

        if (e.type === "sprinter") {
            moveSprinter(e, player);
        } else {
            moveEnemyTowardPlayer(e, player);
        }

        // hit by bullet
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (dist(bullets[j].x, bullets[j].y, e.x, e.y) < e.size / 2 + 5) {
                damageEnemy(e, bullets[j].damage || 2);
                bullets.splice(j, 1);
                break;
            }
        }

        // collide with the player
        let dPlayer = dist(player.x, player.y, e.x, e.y);
        if (dPlayer < (player.size + e.size) / 2) {
            if (!shieldOn) {
                player.hp -= e.contactDamage;
                shakeTimer = 10;
                redMaskAlpha = 150;
            }

            enemies.splice(i, 1);

        } else if (e.hp <= 0) {
            if (enemyDeathSound) {
                // amplify the sound
                enemyDeathSound.setVolume(1.4);
                // random audio rate, change pitch
                enemyDeathSound.rate(random(0.9, 1.1));
                // play the next audio after the current audio finishes
                enemyDeathSound.playMode('sustain');
                enemyDeathSound.play();
            }

            if (e.splitCount) {
                for (let k = 0; k < e.splitCount; k++) {
                    let child = createEnemy("basic", e.x + random(-20, 20), e.y + random(-20, 20));
                    child.size *= 0.75;
                    child.hp = 2;
                    child.maxHp = 2;
                    child.color = e.color;
                    enemies.push(child);
                }
            }

            spawnDeathParticles(e.x, e.y, e.color);
            enemies.splice(i, 1);
            killCount++; // kills increased
        }
    }
}
