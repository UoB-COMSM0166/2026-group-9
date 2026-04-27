function handlePlayerMovement() {
    if (!player) return;
    let moveXMult = 1;
    let moveYMult = 1;
    uiThermometerCold = false;

    if (currentLevel === 3) {
        if (timer <= 50 && timer > 45) {
            moveXMult = -1;
            uiThermometerCold = true;
        } else if (timer <= 30 && timer > 25) {
            moveYMult = -1;
            uiThermometerCold = true;
        } else if (timer <= 15 && timer > 10) {
            moveXMult = -1;
            moveYMult = -1;
            uiThermometerCold = true;
        }
    }

    const spd = player.speed || 4;
    if (keyIsDown(65)) player.x -= spd * moveXMult;
    if (keyIsDown(68)) player.x += spd * moveXMult;
    if (keyIsDown(87)) player.y -= spd * moveYMult;
    if (keyIsDown(83)) player.y += spd * moveYMult;


    const halfW = player.size;       // drawPlayer: width = player.size * 2
    const halfH = player.size / 2;   // drawPlayer: height = player.size
    player.x = constrain(player.x, halfW, WORLD_W - halfW);
    player.y = constrain(player.y, halfH, WORLD_H - halfH);


    if (keyIsDown(79)) goToLevel2();
    if (keyIsDown(80)) goToLevel3();

    handleExtraInput();
    updateExtraStatus();
}

function handleExtraInput() {

    if (keyIsDown(81) && !qDown) {
        if (weaponMode === "normal") {
            weaponMode = "spread";
        } else {
            weaponMode = "normal";
        }
    }
    qDown = keyIsDown(81);


    if (keyIsDown(69) && !eDown) {
        if (!shieldOn && shieldCDLeft <= 0) {
            shieldOn = true;
            shieldTimer = shieldTime;
            shieldCDLeft = shieldCD;
        }
    }
    eDown = keyIsDown(69);


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

    const effectiveFireRate = max(60, baseFireRate - fireRateReduction);
    if (mouseIsPressed && millis() - lastShotTime > effectiveFireRate) {
        let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
        let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);


        let angle = atan2(mouseY - (player.y + camY), mouseX - (player.x + camX));

        if (weaponMode === "normal") {
            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle) * 10,
                vy: sin(angle) * 10,
                damage: 2 + bulletDamageBonus
            });
        } else {
            let spread = 0.2;

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle - spread) * 10,
                vy: sin(angle - spread) * 10,
                damage: 1 + bulletDamageBonus
            });

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle) * 10,
                vy: sin(angle) * 10,
                damage: 1 + bulletDamageBonus
            });

            bullets.push({
                x: player.x,
                y: player.y,
                vx: cos(angle + spread) * 10,
                vy: sin(angle + spread) * 10,
                damage: 1 + bulletDamageBonus
            });
        }

        lastShotTime = millis();
    }
}
