// 修改变量初始值
let gameState = "MENU"; // 默认从菜单开始

function sceneSwitch() {
    if (gameState === "MENU") {
        showMenu(); // 调用新写的菜单函数
    } else if (gameState === "PLAY") {
        if (shakeTimer > 0) {
            translate(random(-5, 5), random(-5, 5));
            shakeTimer--;
        }
        updateGame();
        drawWorld();
        drawUI();
    } else if (gameState === "WIN") {
        showComicBook();
    } else if (gameState === "GAMEOVER") {
        showEndScreen("CELL DESTROYED");
    }
    
    // 受伤红光效果保持不变
    if (redMaskAlpha > 0){
        fill(255, 0, 0, redMaskAlpha);
        rect(0, 0, width, height);
        redMaskAlpha -=10;
    }
}