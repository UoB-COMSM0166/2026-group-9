function preload() {
    preloadAssets();
}

function setup() {
    createCanvas(960, 540);
    resetPlayer();
}

function draw() {
    background(40);

    sceneSwitch();
}

function updateGame() {
    handleShooting();
    handlePlayerMovement();

    spawnEnemies();

    updateObjects();
    updateTimer();

    checkProgress();
    checkGameOver();
}