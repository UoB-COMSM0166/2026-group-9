function drawWorld() {
    push();
    let cam = getCameraOffset();
    translate(cam.x, cam.y);

    imageMode(CORNER);

    if (currentLevel === 1) image(bgImg1, 0, 0, WORLD_W, WORLD_H);
    else if (currentLevel === 2) image(bgImg2, 0, 0, WORLD_W, WORLD_H);
    else image(bgImg3, 0, 0, WORLD_W, WORLD_H);

    drawGameContent();
    pop();
}

function drawGameContent() {

    drawPlayer();

    if (shieldOn && shieldImg) {
        push();
        imageMode(CENTER);
        let shieldSize = player.size + 80;
        tint(255,150);
        image(shieldImg, player.x, player.y, shieldSize, shieldSize);
        pop();
    }

    

    drawHealthBar(player.x, player.y - 25, player.hp, player.maxHp, "green");

  /*  for (let e of enemies) {
        push();
        imageMode(CENTER);


        if (e.flashTimer > 0) {
            if (e.flashTimer % 6 === 0) {
                tint(255, 150);
            } else {
                image(enemyImages[e.imgKey], e.x, e.y, e.size * 2.5, e.size * 1.8);
            }
            e.flashTimer--;
        } else {
            image(enemyImages[e.imgKey], e.x, e.y, e.size * 2.5, e.size * 1.8);
        }

        pop();

        drawHealthBar(e.x, e.y - (e.size * 0.75), e.hp, e.maxHp, "red");
    } */
    for (let e of enemies) {
        push();
        imageMode(CENTER);
    

        let widthScale = 2.5;
        let heightScale = 1.8;
        if (e.type === "tank") {
            widthScale = 1.8;
            heightScale = 1.3;
        }
    
        let imgW = e.size * widthScale;
        let imgH = e.size * heightScale;
    
        if (e.flashTimer > 0) {
            if (e.flashTimer % 6 === 0) {
                tint(255, 150);
            } else {
                image(enemyImages[e.imgKey], e.x, e.y, imgW, imgH);
            }
            e.flashTimer--;
        } else {
            image(enemyImages[e.imgKey], e.x, e.y, imgW, imgH);
        }
        pop();
        drawHealthBar(e.x, e.y - (e.size * 0.75), e.hp, e.maxHp, "red");
    }

    for (let b of bullets) {
        push();
        imageMode(CENTER);
        translate(b.x, b.y);

        let angle = atan2(b.vy, b.vx);
        rotate(angle);

        image(bulletImg, 0, 0, 46,46);
        pop();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.x += p.spdX;
        p.y += p.spdY;
        p.life -= 10;

        push();
        noStroke();
        fill(p.color);
        rectMode(CENTER);
        rect(p.x, p.y, p.size, p.size);
        pop();

        if (p.life <= 0) {
            particles.splice(i, 1);
        }
    }
}


function drawHealthBar(x, y, curr, max, col) {
    push();
    rectMode(CENTER);
    fill(50);
    rect(x, y, 40, 5);
    fill(col === "green" ? "lime" : "red");
    rectMode(CORNER);
    rect(x - 20, y - 2.5, map(curr, 0, max, 0, 40, true), 5);
    pop();
}

function drawUI() {
    // ---- HUD (top-left) ----
    const pad = 14;
    const x0 = 16;
    const y0 = 16;
    const w = 320;
    const h = 118;
    const r = 16;

    const hpRatio = (player.maxHp > 0) ? constrain(player.hp / player.maxHp, 0, 1) : 0;

    const isStory = gameMode === "STORY";
    const mainTimeLabel = isStory ? "TIME" : "SURVIVE";
    const mainTimeValue = isStory ? `${max(0, timer)}s` : `${floor(rogue.survivedFrames / 60)}s`;
    const timeRatio = (isStory && levelDuration > 0)
        ? constrain(timer / levelDuration, 0, 1)
        : 1;

    // shield status + ratio
    let shieldLabel = "READY";
    let shieldColor = color(70, 240, 150);
    let shieldRatio = 1;
    if (shieldOn) {
        shieldLabel = "ON";
        shieldColor = color(0, 220, 255);
        shieldRatio = 1;
    } else if (shieldCDLeft > 0) {
        shieldLabel = `${ceil(shieldCDLeft / 60)}s`;
        shieldColor = color(200);
        shieldRatio = constrain(1 - (shieldCDLeft / shieldCD), 0, 1);
    }

    function roundedPanel(x, y, w, h, radius) {
        push();
        noStroke();
        fill(0, 120);
        rect(x + 3, y + 4, w, h, radius);
        fill(20, 20, 25, 200);
        rect(x, y, w, h, radius);
        stroke(255, 80);
        noFill();
        rect(x, y, w, h, radius);
        pop();
    }

    function tinyLabel(txt, x, y) {
        push();
        noStroke();
        fill(255, 170);
        textAlign(LEFT, TOP);
        textSize(12);
        textStyle(BOLD);
        text(txt, x, y);
        pop();
    }

    function pill(txt, x, y, bgCol) {
        push();
        const tw = textWidth(txt);
        const ph = 22;
        const pw = tw + 16;
        noStroke();
        fill(bgCol);
        rect(x, y, pw, ph, 999);
        fill(255);
        textAlign(LEFT, CENTER);
        textSize(12);
        textStyle(BOLD);
        text(txt, x + 8, y + ph / 2);
        pop();
        return pw;
    }

    function bar(x, y, w, h, ratio, fillCol) {
        push();
        noStroke();
        fill(255, 40);
        rect(x, y, w, h, 999);
        fill(fillCol);
        rect(x, y, w * ratio, h, 999);
        pop();
    }

    function heartIcon(x, y, s, colFill) {
        push();
        translate(x, y);
        noStroke();
        fill(colFill);
        beginShape();
        vertex(0, s * 0.35);
        bezierVertex(-s * 0.55, -s * 0.05, -s * 0.35, -s * 0.55, 0, -s * 0.25);
        bezierVertex(s * 0.35, -s * 0.55, s * 0.55, -s * 0.05, 0, s * 0.35);
        endShape(CLOSE);
        pop();
    }

    // status badge when controls are inverted/confused
    let badgeX = x0 + w - pad;
    push();
    textSize(12);
    textStyle(BOLD);
    if (uiThermometerCold) {
        const label = "CONFUSED";
        const bw = textWidth(label) + 16;
        badgeX -= bw;
        noStroke();
        fill(60, 140, 255, 220);
        rect(badgeX, y0 + pad, bw, 22, 999);
        fill(255);
        textAlign(LEFT, CENTER);
        text(label, badgeX + 8, y0 + pad + 11);
    }
    pop();

    // HP
    const statusLabelX = x0;
    const hpY = y0 + 8;
    const hpBarX = x0 + 38;
    const hpBarY = hpY;
    const hpBarW = 260;
    const hpBarH = 18;
    push();
    noStroke();
    fill(255, 170);
    textAlign(LEFT, CENTER);
    textSize(13);
    textStyle(BOLD);
    text("Hp", statusLabelX, hpBarY + hpBarH / 2);
    fill(255, 55);
    rect(hpBarX, hpBarY, hpBarW, hpBarH, 8);
    fill(90, 255, 140);
    rect(hpBarX, hpBarY, hpBarW * hpRatio, hpBarH, 8);
    fill(255);
    textAlign(RIGHT, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(`${player.hp} / ${player.maxHp}`, hpBarX + hpBarW, hpBarY + hpBarH / 2);
    pop();

    // Skill
    const skillY = y0 + 50;
    const skillGap = 82;
    const bulletUiImg = weaponMode === "spread" ? bullet3Img : bullet1Img;
    drawSkill("Q", "Bullet", bulletUiImg, x0, skillY);
    drawSkill("E", "Shield", shieldIconImg, x0 + skillGap, skillY);
    drawSkill("F", "Medkit", medkitIconImg, x0 + skillGap * 2, skillY);

    function drawSkill(key, label, img, x, y) {
        const iconSize = 30;

        push();
        noStroke();
        fill(255, 170);
        textAlign(CENTER, TOP);
        textSize(11);
        textStyle(BOLD);
        text(label, x + 32, y);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(key, x + 9, y + 32);

        imageMode(CENTER);
        if (img) {
            image(img, x + 39, y + 32, iconSize, iconSize);
        } else {
            fill(255, 60);
            ellipse(x + 39, y + 32, iconSize);
        }

        if (label === "Medkit") {
            fill(255);
            textAlign(LEFT, CENTER);
            textSize(13);
            textStyle(BOLD);
            text(`x${medkits}`, x + 58, y + 32);
        }
        pop();

        // time
        push();
        const timerW = 300;
        const timerH = 86;
        const timerX = width / 2 - timerW / 2;
        const timerY = 16;
        const timeColor = timeRatio <= 0.25 && isStory ? color(255, 90, 90) : color(255, 220, 140);

        noStroke();
        fill(255, 165);
        textAlign(CENTER, TOP);
        textSize(11);
        textStyle(BOLD);
        text(mainTimeLabel, timerX + timerW / 2, timerY + 10);

        fill(255);
        textSize(34);
        text(mainTimeValue, timerX + timerW / 2, timerY + 25);

        const progressX = timerX + 18;
        const progressY = timerY + timerH - 18;
        const progressW = timerW - 36;
        const progressH = 8;

        noStroke();
        fill(255, 35);
        rect(progressX, progressY, progressW, progressH, 8);
        fill(timeColor);
        rect(progressX, progressY, progressW * timeRatio, progressH, 8);
        pop();
    }

    // kill
    if (gameMode === "STORY" && currentLevel >= 2) {
        const targetKills = currentLevel === 2 ? VICTORY_KILLS_LV2 : VICTORY_KILLS_LV3;
        const reachedTarget = killCount >= targetKills;

        push();
        noStroke();
        textAlign(LEFT, TOP);
        textStyle(BOLD);
        textSize(12);
        fill(255, 170);
        text("Kill", statusLabelX, skillY + 50);
        textSize(18);
        fill(reachedTarget ? "lime" : "yellow");
        text(`${killCount} / ${targetKills}`, statusLabelX, skillY + 66);
        pop();
    }

    if (gameMode === "STORY" && timer > levelDuration - 5) {
        push();
        textAlign(CENTER, CENTER);

        let currentLevelDuration = (currentLevel === 1) ? 15 : (currentLevel === 2 ? 25 : 60);
        let title;
        if (currentLevel === 1) title = "LEVEL 1: Lost in Lungs";
        else if (currentLevel === 2) title = "LEVEL 2: Broken Brain";
        else title = "LEVEL 3: Get THE F@%# OUT!";

        if (timer > currentLevelDuration - 5) {
            push();
            textAlign(CENTER, CENTER);
            textSize(50);
            fill(255, 200, 200);
            textStyle(BOLD);
            stroke(0);
            strokeWeight(4);
        }

        text(title, width / 2, height / 2);
        pop();
    }
}

function showPostComicChoiceScreen() {
    background(10);
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("THE END?", width / 2, height * 0.22);
    textSize(18);
    fill(220);
    text("Choose what to do next", width / 2, height * 0.30);
    pop();

    const btns = getPostComicButtons();
    for (const b of btns) drawButton(b);
}

function getPostComicButtons() {
    const w = 360;
    const h = 70;
    const gap = 24;
    const x = width / 2 - w / 2;
    const y1 = height * 0.38;
    const y2 = y1 + h + gap;
    const y3 = y2 + h + gap;

    return [
        {
            x, y: y1, w, h,
            label: "Restart (Level 1)",
            onClick: () => restartStoryFromLevel1()
        },
        {
            x, y: y2, w, h,
            label: "Enter Roguelike",
            onClick: () => startRoguelikeMode()
        },
        {
            x, y: y3, w, h,
            label: "Back to Start",
            onClick: () => {
                stopAllBGM();
                currentPlayingBGM = null;
                gameState = "START";
            }
        }
    ];
}

function drawButton(b) {
    const hover = mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h;
    push();
    rectMode(CORNER);
    noStroke();
    fill(hover ? 70 : 45);
    rect(b.x, b.y, b.w, b.h, 14);
    stroke(hover ? 255 : 160);
    noFill();
    rect(b.x, b.y, b.w, b.h, 14);
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(b.label, b.x + b.w / 2, b.y + b.h / 2);
    pop();
}

function drawBuffSelectionOverlay() {
    if (!rogue.buffChoices) return;

    push();
    fill(0, 170);
    noStroke();
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(26);
    text("Choose one Buff", width / 2, height * 0.18);
    textSize(16);
    fill(220);
    text("Survive longer to get more choices", width / 2, height * 0.24);
    pop();

    const cards = getBuffCardsLayout();
    for (let i = 0; i < cards.length; i++) {
        drawBuffCard(cards[i], rogue.buffChoices[i]);
    }
}

function getBuffCardsLayout() {
    const w = 240;
    const h = 170;
    const gap = 26;
    const totalW = w * 3 + gap * 2;
    const startX = width / 2 - totalW / 2;
    const y = height * 0.40;
    return [
        { x: startX + 0 * (w + gap), y, w, h },
        { x: startX + 1 * (w + gap), y, w, h },
        { x: startX + 2 * (w + gap), y, w, h }
    ];
}

function drawBuffCard(r, choice) {
    const hover = mouseX >= r.x && mouseX <= r.x + r.w && mouseY >= r.y && mouseY <= r.y + r.h;
    push();
    noStroke();
    fill(hover ? 65 : 40);
    rect(r.x, r.y, r.w, r.h, 16);
    stroke(hover ? 255 : 130);
    noFill();
    rect(r.x, r.y, r.w, r.h, 16);
    noStroke();
    fill(255);
    textAlign(CENTER, TOP);
    textSize(18);
    text(choice.title, r.x + r.w / 2, r.y + 16);
    pop();
}

function showEndScreen(msg) {
    background(0, 180);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text(msg, width / 2, height / 2);
}
