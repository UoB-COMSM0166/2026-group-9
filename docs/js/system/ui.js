function drawWorld() {
    push();
    let cam = getCameraOffset();
    translate(cam.x, cam.y);
    // 根據當前關卡顯示背景
    if (currentLevel === 1) image(bgImg1, 0, 0, WORLD_W, WORLD_H);
    else if (currentLevel === 2) image(bgImg2, 0, 0, WORLD_W, WORLD_H);
    else image(bgImg3, 0, 0, WORLD_W, WORLD_H);

    drawGameContent();
    pop();
}

function drawGameContent() {
    // 畫主角
    if (shieldOn && shieldImg) {
        push();
        imageMode(CENTER);
        let shieldSize = player.size + 80;  // 比玩家略大，可自行调整
        image(shieldImg, player.x, player.y, shieldSize, shieldSize);
        pop();
    }

    drawPlayer(); // new add 调用我们在player.js里写的图像绘制函数

  /*  if (shieldOn) {
        push();
        noFill();
        stroke(0, 200, 255);
        strokeWeight(4);
        ellipse(player.x, player.y, player.size + 18);
        pop();
    }
        */

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
    fill(255);
    textSize(20);
    textAlign(LEFT);
    if (gameMode === "STORY") {
        text("Time: " + timer, 20, 30);
    } else {
        const survivedSec = floor(rogue.survivedFrames / 60);
        text("Survive: " + survivedSec + "s", 20, 30);
    }
    text("HP: " + player.hp + " / " + player.maxHp, 20, 60);
    text("Weapon: " + weaponMode.toUpperCase(), 20, 90);
    text("Medkits: " + medkits, 20, 120);

    if (shieldOn) {
        fill(0, 255, 255);
        text("Shield: ON", 20, 150);
    } else if (shieldCDLeft > 0) {
        fill(180);
        text("Shield CD: " + ceil(shieldCDLeft / 60) + "s", 20, 150);
    } else {
        fill("lime");
        text("Shield: READY", 20, 150);
    }

    fill(255);
    // 第一關隱藏殺敵進度，第二關才顯示
    if (gameMode === "STORY" && currentLevel === 2) {
        fill(killCount >= VICTORY_KILLS_LV2 ? "lime" : "yellow");
        text("Kills: " + killCount + " / " + VICTORY_KILLS_LV2, 20, 180);
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

    drawThermometer(900, 100);
}

//溫度計進度條
function drawThermometer(posX, posY) {
    if (gameMode !== "STORY" || levelDuration <= 0) return;
    let barWidth = 15;
    let barHeight = 200;
    let circleSize = 35;
    let progress = (levelDuration - timer) / levelDuration;
    push();
    noStroke();
    fill(255);
    ellipse(posX, posY + barHeight, circleSize, circleSize);
    rectMode(CENTER);
    rect(posX, posY + barHeight / 2, barWidth, barHeight, 10);
    // 方向键颠倒/混乱时 -> 温度计变蓝
    if (uiThermometerCold) fill(60, 140, 255);
    else fill(255, 50, 50);
    ellipse(posX, posY + barHeight, circleSize - 8, circleSize - 8);
    rectMode(CORNER);
    rect(posX - barWidth / 2 + 3, (posY + barHeight) - barHeight * progress, barWidth - 6, barHeight * progress, 2);
    pop();
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
    fill(220);
    textSize(14);
    text(choice.desc, r.x + r.w / 2, r.y + 56, r.w - 24, r.h - 70);
    pop();
}

function showEndScreen(msg) {
    background(0, 180);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text(msg, width / 2, height / 2);
}
