function sceneSwitch() {
    if (gameState === "START") {
        showStartMenuScreen();
    } else if (gameState === "HELP") {
        showHelpScreen();
    } else if (gameState === "MODE_SELECT") {
        showModeSelectScreen();
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
    } else if (gameState === "POST_COMIC") {
        showPostComicChoiceScreen();
    } else if (gameState === "BUFF_SELECT") {
        // 暫停更新，但仍顯示當前畫面 + overlay
        drawWorld();
        drawUI();
        drawBuffSelectionOverlay();
    } else {
        showEndScreen("CELL DESTROYED");
    }
    if (redMaskAlpha > 0){
        fill(255, 0, 0, redMaskAlpha);
        rect(0, 0, width, height);
        redMaskAlpha -=10;
    }
}