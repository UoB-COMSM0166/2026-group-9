function sceneSwitch() {
    if (gameState === "PLAY") {
        updateGame();
        drawWorld();
        drawUI();
    } else if (gameState === "WIN") {
        showEndScreen("ALL INFECTIONS CLEARED!");
    } else {
        showEndScreen("CELL DESTROYED");
    }
}