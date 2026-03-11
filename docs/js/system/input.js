function handlePlayerMovement() {
    // 玩家移動
    if (keyIsDown(65)) player.x -= 4;
    if (keyIsDown(68)) player.x += 4;
    if (keyIsDown(87)) player.y -= 4;
    if (keyIsDown(83)) player.y += 4;
    // 按下P键进入第二关，方便调试
    if (keyIsDown(80)) goToLevel2();

    player.x = constrain(player.x, 0, WORLD_W);
    player.y = constrain(player.y, 0, WORLD_H);
}

function handleShooting() {
    // 自動射擊邏輯：按住滑鼠且過了冷卻時間
    if (mouseIsPressed && millis() - lastShotTime > fireRate) {
        let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
        let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);

        // 計算從玩家中心到滑鼠位置的角度
        let angle = atan2(mouseY - (player.y + camY), mouseX - (player.x + camX));

        bullets.push({
            x: player.x,
            y: player.y,
            vx: cos(angle) * 10,
            vy: sin(angle) * 10
        });

        lastShotTime = millis(); // 更新最後射擊時間
    }
}
