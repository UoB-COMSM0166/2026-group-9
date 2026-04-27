function updateTimer() {

    if (gameState !== "PLAY") return;

    if (gameMode === "STORY") {
        if (frameCount % 60 === 0 && timer > 0) timer--;
    } else if (gameMode === "ROGUELIKE") {
        rogue.survivedFrames++;

        const survivedSec = floor(rogue.survivedFrames / 60);
        if (survivedSec >= rogue.nextBuffAtSec) {
            triggerBuffSelection();
            rogue.nextBuffAtSec += 20;
        }
    }
}

function checkProgress() {
    if (gameState !== "PLAY") return;
    if (gameMode !== "STORY") return;
    if (timer <= 0) {
        if (currentLevel === 1) {
            goToLevel2();
        } else if (currentLevel === 2) {
            if (killCount >= VICTORY_KILLS_LV2) {
                goToLevel3();
            } else gameState = "GAMEOVER";
        } else if (currentLevel === 3) {
            if (killCount >= VICTORY_KILLS_LV3) triggerGameWin();
            else gameState = "GAMEOVER";
        }
    }
}

function checkGameOver() {
    if (gameState !== "PLAY") return;
    if (player.hp <= 0) gameState = "GAMEOVER";
}

function goToLevel2() {
    gameMode = "STORY";
    currentLevel = 2;
    levelDuration = 45;
    timer = 45;
    killCount = 0; 
    enemies = [];
    bullets = [];
    resetPlayer();
}

function goToLevel3() {
    gameMode = "STORY";
    currentLevel = 3;
    levelDuration = 60; 
    timer = 60;
    killCount = 0;
    enemies = [];
    bullets = [];
    resetPlayer();
}

function restartStoryFromLevel1() {
    gameMode = "STORY";
    currentLevel = 1;
    levelDuration = 30;
    timer = 30;
    killCount = 0;
    enemies = [];
    bullets = [];
    particles = [];

    baseFireRate = 200;
    fireRateReduction = 0;
    bulletDamageBonus = 0;
    resetPlayer();
    gameState = "PLAY";
}

function startRoguelikeMode() {
    gameMode = "ROGUELIKE";
    currentLevel = 1;
    levelDuration = 0;
    timer = 0;
    killCount = 0;
    enemies = [];
    bullets = [];
    particles = [];
    baseFireRate = 200;
    fireRateReduction = 0;
    bulletDamageBonus = 0;
    rogue.survivedFrames = 0;
    rogue.nextBuffAtSec = 20;
    rogue.buffChoices = null;
    resetPlayer();
    gameState = "PLAY";
}

function updateGameState() {
    if (gameState === "START" || gameState === "HELP" || gameState === "MODE_SELECT") {
        playStageBGM(bgmmenu); 
    } else if (gameState === "PLAY") {
        if (currentLevel === 1) {
            playStageBGM(bgm01);
        } else if (currentLevel === 2) {
            playStageBGM(bgm02);
        } else if (currentLevel === 3) {
            playStageBGM(bgm03);
        }
    }
}