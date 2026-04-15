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
     
    drawPlayer(); // new add 调用我们在player.js里写的图像绘制函数


    // drawHealthBar(player.x, player.y - 25, player.hp, 10, "green");
    drawHealthBar(player.x, player.y - 25, player.hp, 20, "green");
    /* 畫敵人
    for (let e of enemies) {
        push();
        noStroke();
        // 敌人受伤闪烁
        // todo 受伤动画选择
        if (e.flashTimer > 0) {
            if (e.flashTimer % 6 === 0) {
                fill(255);
            } else {
                fill(e.color);
            }

            e.flashTimer--;
        } else {
            fill(e.color);
        }
        if (e.shape === "rect") {
            rectMode(CENTER);
            rect(e.x, e.y, e.size, e.size);
        } else if (e.shape === "triangle") {
            let r = e.size / 2;
            // 等边三角形
            triangle(
                e.x, e.y - r,
                e.x - r * 0.866, e.y + r * 0.5,
                e.x + r * 0.866, e.y + r * 0.5
            );
        } else {
            ellipse(e.x, e.y, e.size);
        }
        pop();
        drawHealthBar(e.x, e.y - (e.size * 0.75), e.hp, e.maxHp, "red");
    }*/
    
    for (let e of enemies) {
        push();
        imageMode(CENTER);
    // 受伤闪烁效果
        if (e.flashTimer > 0) {
            tint(255, 150);
            e.flashTimer--;
        }
    // 绘制敌人图片
        image(enemyImages[e.imgKey], e.x, e.y, e.size*2, e.size*2);
        pop();
    // 血条完全不动
        drawHealthBar(e.x, e.y - (e.size * 0.75), e.hp, e.maxHp, "red");
    }
    // 畫子彈
    fill(255, 255, 0);
    for (let b of bullets) ellipse(b.x, b.y, 12);

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
    text("Time: " + timer, 20, 30);
    text("HP: " + player.hp, 20, 60);
    // 第一關隱藏殺敵進度，第二關才顯示
    if (currentLevel === 2) {
        fill(killCount >= VICTORY_KILLS_LV2 ? "lime" : "yellow");
        text("Kills: " + killCount + " / " + VICTORY_KILLS_LV2, 20, 90);
    }
    // 關卡標題顯示 5 秒
    if (timer > levelDuration - 5) {
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
    fill(255, 50, 50);
    ellipse(posX, posY + barHeight, circleSize - 8, circleSize - 8);
    rectMode(CORNER);
    rect(posX - barWidth / 2 + 3, (posY + barHeight) - barHeight * progress, barWidth - 6, barHeight * progress, 2);
    pop();
}

function showEndScreen(msg) {
    background(0, 180);
    fill(255);
    textAlign(CENTER);
    textSize(40);
    text(msg, width / 2, height / 2);
}
