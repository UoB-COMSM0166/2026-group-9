function handlePlayerMovement() {
    let moveXMult = 1;
    let moveYMult = 1;
    let confusionMsg = "";

    if (currentLevel === 3) {
        if (timer <= 50 && timer > 45) {
            moveXMult = -1;
            confusionMsg = "WARNING: HORIZONTAL CONFUSION!\n警告:左右移動失調!";
        } else if (timer <= 30 && timer > 25) {
            moveYMult = -1;
            confusionMsg = "WARNING: VERTICAL CONFUSION!\n警告:上下移動失調!";
        } else if (timer <= 15 && timer > 10) {
            moveXMult = -1;
            moveYMult = -1;
            confusionMsg = "WARNING: COMPLETE CONFUSION!\n警告:全方位移動失調!";
        }
    }

    if (keyIsDown(65)) player.x -= 4 * moveXMult;
    if (keyIsDown(68)) player.x += 4 * moveXMult;
    if (keyIsDown(87)) player.y -= 4 * moveYMult;
    if (keyIsDown(83)) player.y += 4 * moveYMult;

    player.x = constrain(player.x, 0, WORLD_W);
    player.y = constrain(player.y, 0, WORLD_H);

    // 方便调试，按o进入第二关，按p进入第三关
    if (keyIsDown(79)) goToLevel2();
    if (keyIsDown(80)) goToLevel3();

    handleExtraInput();
    updateExtraStatus();

    if (confusionMsg !== "") {
        fill(255, 0, 0);
        textSize(30);
        textAlign(CENTER);
        text(confusionMsg, width / 2, height / 2, 100);
    }
}

function handleExtraInput() {
    // Q 切换武器模式
    if (keyIsDown(81) && !qDown) {
        if (weaponMode === "normal") {
            weaponMode = "spread";
        } else {
            weaponMode = "normal";
        }
    }
    qDown = keyIsDown(81);

    // E 开盾
    if (keyIsDown(69) && !eDown) {
        if (!shieldOn && shieldCDLeft <= 0) {
            shieldOn = true;
            shieldTimer = shieldTime;
            shieldCDLeft = shieldCD;
        }
    }
    eDown = keyIsDown(69);

    // F 使用药包
    if (keyIsDown(70) && !fDown) {
        if (medkits > 0 && player.hp < player.maxHp) {
            player.hp += healValue;
            if (player.hp > player.maxHp) {
                player.hp = player.maxHp;
            }
            medkits--;
        }
    }
    fDown = keyIsDown(70);
}

function updateExtraStatus() {
    if (shieldOn) {
        shieldTimer--;
        if (shieldTimer <= 0) {
            shieldOn = false;
            shieldTimer = 0;
        }
    }

    if (shieldCDLeft > 0) {
        shieldCDLeft--;
    }
}

function handleShooting() {
    // 自動射擊邏輯：按住滑鼠且過了冷卻時間
    if (mouseIsPressed && millis() - lastShotTime > fireRate) {
        let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
        let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);

        // 計算從玩家中心到滑鼠位置的角度
        let angle = atan2(mouseY - (player.y + camY), mouseX - (player.x + camX));

        if (weaponMode === "normal") {
            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle) * 10,
                vy: sin(angle) * 10,
                damage: 2
            });
        } else {
            let spread = 0.2;

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle - spread) * 10,
                vy: sin(angle - spread) * 10,
                damage: 1
            });

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle) * 10,
                vy: sin(angle) * 10,
                damage: 1
            });

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle + spread) * 10,
                vy: sin(angle + spread) * 10,
                damage: 1
            });
        }

        lastShotTime = millis(); // 更新最後射擊時間
    }
}
