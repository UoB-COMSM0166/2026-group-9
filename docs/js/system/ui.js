function drawWorld() {
    push();
    let cam = getCameraOffset();
    translate(cam.x, cam.y);
    // 防止其他场景（如漫画）修改全局 imageMode 导致地图绘制偏移
    imageMode(CORNER);
    // 根據當前關卡顯示背景
    if (currentLevel === 1) image(bgImg1, 0, 0, WORLD_W, WORLD_H);
    else if (currentLevel === 2) image(bgImg2, 0, 0, WORLD_W, WORLD_H);
    else image(bgImg3, 0, 0, WORLD_W, WORLD_H);

    drawGameContent();
    pop();
}

function drawGameContent() {
    // 畫主角
    drawPlayer(); // new add 调用我们在player.js里写的图像绘制函数

    if (shieldOn && shieldImg) {
        push();
        imageMode(CENTER);
        let shieldSize = player.size + 80;  // 比玩家略大，可自行调整
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
        // 血条完全不动
        drawHealthBar(e.x, e.y - (e.size * 0.75), e.hp, e.maxHp, "red");
    } */
    for (let e of enemies) {
        push();
        imageMode(CENTER);
    
    // 计算图片缩放系数
        let widthScale = 2.5;
        let heightScale = 1.8;
        if (e.type === "tank") {
            widthScale = 1.8;   // 坦克宽度缩小一些
            heightScale = 1.3;  // 高度也相应调整
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
        // 计算子弹角度，使图片朝向运动方向
        let angle = atan2(b.vy, b.vx);
        rotate(angle);
        // 图片大小可根据需要调整，这里设为 24x24
        image(bulletImg, 0, 0, 46,46);
        pop();
    }
    // 画粒子
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

// 也许可以根据敌人体型大小修改血条整体大小
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
    const h = 156;
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

    roundedPanel(x0, y0, w, h, r);

    // Row 1: TIME/SURVIVE + status badges
    tinyLabel(mainTimeLabel, x0 + pad, y0 + pad - 2);
    push();
    fill(255);
    textAlign(LEFT, TOP);
    textSize(18);
    textStyle(BOLD);
    text(mainTimeValue, x0 + pad, y0 + pad + 12);
    pop();

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

    // time bar (story only)
    if (isStory && levelDuration > 0) {
        bar(x0 + pad, y0 + 52, w - pad * 2, 10, timeRatio, color(255, 200, 200));
    } else {
        bar(x0 + pad, y0 + 52, w - pad * 2, 10, 1, color(180, 180, 200));
    }

    // Row 2: HP
    const hpY = y0 + 72;
    heartIcon(x0 + pad + 8, hpY + 10, 18, color(255, 90, 110));
    tinyLabel("HP", x0 + pad + 26, hpY + 2);
    push();
    fill(255);
    textAlign(LEFT, TOP);
    textSize(14);
    textStyle(BOLD);
    text(`${player.hp} / ${player.maxHp}`, x0 + pad + 26, hpY + 16);
    pop();
    bar(x0 + pad + 140, hpY + 12, w - pad * 2 - 140, 12, hpRatio, color(90, 255, 140));

    // Row 3: Weapon + Medkits + Shield
    const rowY = y0 + 112;
    push();
    fill(255, 170);
    textAlign(LEFT, TOP);
    textSize(12);
    textStyle(BOLD);
    text("WEAPON", x0 + pad, rowY);
    pop();
    push();
    textSize(12);
    textStyle(BOLD);
    const weaponText = weaponMode ? weaponMode.toUpperCase() : "NORMAL";
    const weaponW = pill(weaponText, x0 + pad, rowY + 18, color(120, 80, 255, 200));
    pop();

    // medkits
    push();
    fill(255, 170);
    textAlign(LEFT, TOP);
    textSize(12);
    textStyle(BOLD);
    text("MEDKITS", x0 + pad + weaponW + 14, rowY);
    pop();
    push();
    const mkX = x0 + pad + weaponW + 14;
    const mkY = rowY + 18;
    const mkLabel = `x${medkits}`;
    pill(mkLabel, mkX, mkY, color(45, 45, 55, 220));
    pop();

    // shield (right)
    push();
    const shTxt = `SHIELD ${shieldLabel}`;
    textSize(12);
    textStyle(BOLD);
    const shW = textWidth(shTxt) + 16;
    const shX = x0 + w - pad - shW;
    const shY = rowY + 18;
    noStroke();
    fill(red(shieldColor), green(shieldColor), blue(shieldColor), 190);
    rect(shX, shY, shW, 22, 999);
    // cooldown progress overlay
    if (!shieldOn && shieldCDLeft > 0) {
        fill(0, 110);
        rect(shX + shW * shieldRatio, shY, shW * (1 - shieldRatio), 22, 999);
    }
    fill(10);
    textAlign(LEFT, CENTER);
    text(shTxt, shX + 8, shY + 11);
    pop();

    // 第一關隱藏殺敵進度，第二關才顯示（保留原逻辑，但放在面板下方一点）
    if (gameMode === "STORY" && currentLevel === 2) {
        push();
        const yy = y0 + h + 10;
        const ww = 240;
        const hh = 28;
        const xx = x0;
        noStroke();
        fill(0, 120);
        rect(xx + 3, yy + 3, ww, hh, 12);
        fill(20, 20, 25, 200);
        rect(xx, yy, ww, hh, 12);
        stroke(255, 70);
        noFill();
        rect(xx, yy, ww, hh, 12);
        noStroke();
        fill(killCount >= VICTORY_KILLS_LV2 ? "lime" : "yellow");
        textAlign(CENTER, CENTER);
        textSize(13);
        textStyle(BOLD);
        text(`KILLS ${killCount} / ${VICTORY_KILLS_LV2}`, xx + ww / 2, yy + hh / 2);
        pop();
    }
    // 關卡標題顯示 5 秒
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
    const y1 = height * 0.44;
    const y2 = y1 + h + gap;

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
