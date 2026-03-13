function updateTimer() {
    // 計時器邏輯
    if (frameCount % 60 === 0 && timer > 0) timer--;
}

function checkProgress() {
    // --- 關鍵修改：通關判定邏輯 ---
    if (timer <= 0) {
        if (currentLevel === 1) {
            // 第一關：只要時間到就進下一關
            goToLevel2();
        } else if (currentLevel === 2) {
            // 第二關：時間到「且」殺敵滿 20
            if (killCount >= VICTORY_KILLS_LV2) {
                gameState = "WIN";
            } else {
                gameState = "GAMEOVER"; // 沒殺滿 20 隻，判定失敗
            }
        }
    }
}

function checkGameOver() {
    if (player.hp <= 0) gameState = "GAMEOVER";
}

function goToLevel2() {
    currentLevel = 2;
    levelDuration = 25;
    timer = 25;
    killCount = 0; // 重置第二關的殺敵數
    enemies = [];
    bullets = [];
    resetPlayer();
}