function preload() {
    preloadAssets();
    for(let i = 0; i < 10; i++){
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); // 請確保路徑正確
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


    handlePlayerMovement();
    handleShooting();


    spawnEnemies();

    updateObjects();
    updateTimer();

    checkProgress();
    checkGameOver();
}