function drawWorld() {
    push();
    let cam = getCameraOffset();
    translate(cam.x, cam.y);
    // 根據當前關卡顯示背景
    if (currentLevel === 1) image(bgImg1, 0, 0, WORLD_W, WORLD_H);
    else image(bgImg2, 0, 0, WORLD_W, WORLD_H);

    drawGameContent();
    pop();
}

function drawGameContent() {
    // 畫主角
    fill(0, 255, 150);
    ellipse(player.x, player.y, player.size);
    drawHealthBar(player.x, player.y - 25, player.hp, 10, "green");
    // 畫敵人
    for (let e of enemies) {
        fill(255, 50, 50);
        ellipse(e.x, e.y, e.size);
        drawHealthBar(e.x, e.y - 20, e.hp, e.hp, "red");
    }
    // 畫子彈
    fill(255, 255, 0);
    for (let b of bullets) ellipse(b.x, b.y, 12);
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
        textSize(50);
        fill(255, 200, 200);
        textStyle(BOLD);
        stroke(0);
        strokeWeight(4);
        let title = currentLevel === 1 ? "-Infected Lungs-" : "-Toxic Stomach-";
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
