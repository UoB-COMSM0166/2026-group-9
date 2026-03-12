let bgImg1, bgImg2, bgImg3;
let player;
let bullets = [];
let enemies = [];
// let timer = 45;
let timer = 15;
let killCount = 0;
let currentLevel = 1;
let gameState = "PLAY";
let lastshotTime = 0;
let fireRate = 200; // 射擊間隔200毫秒
let shakeTimer = 0;
let redMaskAlpha = 0;

const WORLD_W = 1920;
const WORLD_H = 1080;
let levelDuration = 45;
// const VICTORY_KILLS_LV2 = 20; // 第二關需要的殺敵數門檻
const VICTORY_KILLS_LV2 = 10; // 第二關需要的殺敵數門檻

function preload() {
    bgImg1 = loadImage('01.png');
    bgImg2 = loadImage('02.png');
    bgImg3 = loadImage('03.png');
}

function setup() {
    createCanvas(960, 540);
    resetPlayer();
}

function draw() {
    background(40);

    if (gameState === "PLAY") {
        updateGame();

        push();
        // 攝影機跟隨邏輯
        let camX = width / 2 - player.x;
        let camY = height / 2 - player.y;
        camX = constrain(camX, -(WORLD_W - width), 0);
        camY = constrain(camY, -(WORLD_H - height), 0);
        translate(camX, camY);

        // 根據當前關卡顯示背景
        if (currentLevel === 1) image(bgImg1, 0, 0, WORLD_W, WORLD_H);
        else if (currentLevel === 2) image(bgImg2, 0, 0, WORLD_W, WORLD_H);
        else image(bgImg3, 0, 0, WORLD_W, WORLD_H);

        drawGameContent();
        pop();

        drawUI();
    } else if (gameState === "WIN") {
        showEndScreen("ALL INFECTIONS CLEARED!");
    } else {
        showEndScreen("CELL DESTROYED");
    }
    if (shakeTimer > 0){
        translate(random(-5,5), random(-5,5));
        shakeTimer--;
    }
    if (redMaskAlpha > 0){
        fill(255, 0, 0, redMaskAlpha);
        rect(0, 0, width, height);
        redMaskAlpha -=10;
    }
}

function updateGame() {
    let moveXMult = 1;
    let moveYMult = 1;
    let confusionMsg = "";
    if(currentLevel ===3){
        if(timer <=50 && timer > 45){
            moveXMult = -1;
            confusionMsg = "WARNING: HORIZONTAL CONFUSION!\n警告:左右移動失調!";
        }
        else if(timer <=30 && timer > 25){
            moveYMult = -1;
            confusionMsg = "WARNING: VERTICAL CONFUSION!\n警告:上下移動失調!";
        }
        else if(timer <=15 && timer > 10){
            moveXMult = -1;
            moveYMult = -1;
            confusionMsg = "WARNING: COMPLETE CONFUSION!\n警告:全方位移動失調!";
        }

    }
    if(keyIsDown(65)) player.x-= 4 * moveXMult;//A
    if(KeyIsDown(68)) player.x+= 4 * moveXMult;//D
    if(KeyIsDown(87)) player.y-= 4 * moveYMult;//W
    if(KeyIsDown(83)) player.y+= 4 * moveYMult;//S

    if(confusionMsg !== ""){
        fill(255, 0, 0);
        textSize(30);
        textAlign(CENTER);
        text(confusionMsg, width/2, height/2, 100);
    }
    // 自動射擊邏輯：按住滑鼠且過了冷卻時間
  if (mouseIsPressed && millis() - lastshotTime > fireRate) {
    let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
    let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);
    
    // 計算從玩家中心到滑鼠位置的角度
    let angle = atan2(mouseY - (player.y + camY), mouseX - (player.x + camX));
    
    bullets.push({ 
        //used AI to help figure out the correct angle...//
      x: player.x, 
      y: player.y, 
      vx: cos(angle) * 10, 
      vy: sin(angle) * 10 
    });
    
    lastshotTime = millis(); // 更新最後射擊時間
  }
    // 玩家移動
    // if (keyIsDown(LEFT_ARROW)) player.x -= 4;
    // if (keyIsDown(RIGHT_ARROW)) player.x += 4;
    // if (keyIsDown(UP_ARROW)) player.y -= 4;
    // if (keyIsDown(DOWN_ARROW)) player.y += 4;
    if (keyIsDown(65)) player.x -= 4;
    if (keyIsDown(68)) player.x += 4;
    if (keyIsDown(87)) player.y -= 4;
    if (keyIsDown(83)) player.y += 4;

    if (keyIsDown(80)) goToLevel2();

    player.x = constrain(player.x, 0, WORLD_W);
    player.y = constrain(player.y, 0, WORLD_H);

    // 敵人生成：第二關生成頻率稍快
    // 根據關卡調整生成頻率 (數字越小越快)
let spawnRate = 60; 
if (currentLevel === 1) spawnRate = 60;
else if (currentLevel === 2) spawnRate = 45;
else if (currentLevel === 3) spawnRate = 30; // 第三關大幅增加生成速度

if (frameCount % spawnRate === 0) {
    let angle = random(TWO_PI);
    enemies.push({
        x: player.x + cos(angle) * 400,
        y: player.y + sin(angle) * 400,
        size: 25,
        // 第三關細菌血量增加 (假設原本是 3 或 5)
        hp: currentLevel === 3 ? 8 : (currentLevel === 2 ? 5 : 3) 
    });
}

    updateObjects();

    // 計時器邏輯
    if (frameCount % 60 === 0 && timer > 0) timer--;

    // --- 關鍵修改：通關判定邏輯 ---
    if (timer <= 0) {
        if (currentLevel === 1) {
            // 第一關：只要時間到就進下一關
            goToLevel2();
        } else if (currentLevel === 2) {
            // 第二關：時間到「且」殺敵滿 20
            if (killCount >= VICTORY_KILLS_LV2) {
                goToLevel3();
            } else gameState = "GAMEOVER"; 
        }else if( currentLevel === 3) {
                if (killCount >= 45) gameState = "WIN";
                else gameState = "GAMEOVER";
            }
        }
    

    if (player.hp <= 0) {gameState = "GAMEOVER";}
}


function updateObjects() {
    // 子彈移動
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].x += bullets[i].vx;
        bullets[i].y += bullets[i].vy;
        if (bullets[i].x < 0 || bullets[i].x > WORLD_W || bullets[i].y < 0 || bullets[i].y > WORLD_H) {
            bullets.splice(i, 1);
        }
    }

    // 敵人追逐與碰撞
    for (let i = enemies.length - 1; i >= 0; i--) {
        let e = enemies[i];
        let angle = atan2(player.y - e.y, player.x - e.x);
        e.x += cos(angle) * (currentLevel === 1 ? 3.0 : 3.5);
        e.y += sin(angle) * (currentLevel === 1 ? 3.0 : 3.5);

        // 被子彈擊中
        for (let j = bullets.length - 1; j >= 0; j--) {
            if (dist(bullets[j].x, bullets[j].y, e.x, e.y) < e.size / 2 + 5) {
                // e.hp--;
                e.hp -= 3;
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
            enemies.splice(i, 1);
            killCount++; // 擊殺數增加
        }
    }
}

function goToLevel2() {
    currentLevel = 2;
    levelDuration = 60;
    // timer = 60;
    timer = 25;
    killCount = 0; // 重置第二關的殺敵數
    enemies = [];
    bullets = [];
    resetPlayer();
}

function goToLevel3() {
    currentLevel = 3;
    levelDuration = 60; // 設定通關時間一分鐘
    timer = 60;
    killCount = 0; 
    VICTORY_KILLS_LV3 = 45; // 新增一個變數來存第三關目標
    enemies = [];
    bullets = [];
    resetPlayer();
}

function resetPlayer() {
    player = {x: WORLD_W / 2, y: WORLD_H / 2, size: 30, hp: 10};
}

//此為原本的射擊邏輯，已改為限制射擊頻率的版本
// function mousePressed() {
//     if (gameState === "PLAY") {
//         // 修正攝影機偏移後的射擊角度
//         let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
//         let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);
//         let angle = atan2(mouseY - (player.y + camY), mouseX - (player.x + camX));
//         bullets.push({x: player.x, y: player.y, vx: cos(angle) * 10, vy: sin(angle) * 10});
//     }
// }

function drawGameContent() {
    // 畫主角
    fill(0, 255, 150);
    ellipse(player.x, player.y, player.size);
    drawHealthBar(player.x, player.y - 25, player.hp, 10, "green");

    // 畫敵人
    for (let e of enemies) {
        fill(255, 50, 50);
        ellipse(e.x, e.y, e.size);
        drawHealthBar(e.x, e.y - 20, e.hp, currentLevel === 1 ? 3 : 5, "red");
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
        let title = " ";
        let currentLevelDuration = (currentLevel === 1) ? 15 : (currentLevel === 2 ? 25 : 60);
        if(currentLevel === 1) title = "LEVEL 1: Lost in Lungs";
        else if(currentLevel === 2) title = "LEVEL 2: Broken Brain";
        else title = "LEVEL 3: Get THE F@%# OUT!";
        if(timer > currentLevelDuration - 5){
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

