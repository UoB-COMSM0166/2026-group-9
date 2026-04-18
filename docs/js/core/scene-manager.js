function sceneSwitch() {
    //new add for image
    if(gameState === "PLAY"){
        if(progress >= 0 && progress < 30){
            currentLevel = 1;
        } else if(progress >= 30 && progress < 60){
            currentLevel = 2;
        } else if(progress >= 60){
            currentLevel = 3;
        }
        currentPlayerImg = playerImgs[currentLevel];
    }

    if (gameState === "PLAY") {
        if (shakeTimer > 0) {
            translate(random(-5, 5), random(-5, 5));
            shakeTimer--;
        }

        updateGame();
        drawWorld();
        drawUI();
    } else if (gameState === "WIN") {
        showComicBook();
    } else {
        showEndScreen("CELL DESTROYED");
    }
    if (redMaskAlpha > 0){
        fill(255, 0, 0, redMaskAlpha);
        rect(0, 0, width, height);
        redMaskAlpha -=10;
    }
}