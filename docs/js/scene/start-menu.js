// js/scene/menu.js

function showMenu() {
    background(20); // 深色背景
    
    // 标题
    fill(255, 200, 200);
    textAlign(CENTER, CENTER);
    textSize(60);
    textStyle(BOLD);
    text("MICROBE INVASION", width / 2, height / 2 - 100);

    // 绘制按钮
    drawMenuButton("START GAME", width / 2, height / 2 + 20);
    drawMenuButton("SETTINGS", width / 2, height / 2 + 100);
}

function drawMenuButton(label, x, y) {
    let btnW = 200;
    let btnH = 50;
    
    // 检测鼠标悬停
    let isHover = mouseX > x - btnW/2 && mouseX < x + btnW/2 && 
                  mouseY > y - btnH/2 && mouseY < y + btnH/2;

    push();
    rectMode(CENTER);
    stroke(255);
    strokeWeight(2);
    fill(isHover ? 100 : 40); // 悬停变色
    rect(x, y, btnW, btnH, 10);
    
    noStroke();
    fill(255);
    textSize(24);
    text(label, x, y);
    pop();
}

function handleMenuClick() {
    // 检查 "START GAME" 按钮
    if (mouseX > width/2 - 100 && mouseX < width/2 + 100 && 
        mouseY > height/2 + 20 - 25 && mouseY < height/2 + 20 + 25) {
        startGame();
    }
    
    // 检查 "SETTINGS" 按钮
    if (mouseX > width/2 - 100 && mouseX < width/2 + 100 && 
        mouseY > height/2 + 100 - 25 && mouseY < height/2 + 100 + 25) {
        console.log("Settings clicked!"); // 这里可以添加设置逻辑
    }
}

function startGame() {
    gameState = "PLAY";
    currentLevel = 1;
    timer = 15;
    killCount = 0;
    enemies = [];
    bullets = [];
    resetPlayer();
}