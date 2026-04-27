let playerImg; // new add for image
let enemyImages={};
let shieldImg; 
function preload() {
    preloadAssets();
    playerImg = loadImage('asset/image/role/player01.png');
    playerImg2 = loadImage('asset/image/role/player02.png');
    playerImg3 = loadImage('asset/image/role/player03.png');
    bulletImg = loadImage('asset/image/bullet/bullet.png');
    //new add for image
    for(let i = 0; i < 10; i++){
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); 
    enemyDeathSound = loadSound('asset/audio/enemy-death.wav');

    enemyImages = {};
    enemyImages.enemy1 = loadImage('asset/image/enemy/basic.png');
    enemyImages.enemy2 = loadImage('asset/image/enemy/fast.png');
    enemyImages.enemy3 = loadImage('asset/image/enemy/tank.png');
    enemyImages.enemy4 = loadImage('asset/image/enemy/splitter.png');
    enemyImages.enemy5 = loadImage('asset/image/enemy/sprinter.png');
    //new add
    shieldImg = loadImage('asset/image/bullet/shield.png');

    // ui
    bullet1Img = loadImage('asset/image/ui/bullet1.png');
    bullet3Img = loadImage('asset/image/ui/bullet3.png');
    medkitIconImg = loadImage('asset/image/ui/medkitIcon.png');
    shieldIconImg = loadImage('asset/image/ui/shieldIcon.png');
}

function setup() {
    createCanvas(1080, 660);
    resetPlayer();
}


function draw() {
    background(40);

    sceneSwitch();
    GlitchManager.checkStatus(timer, currentLevel);
    GlitchManager.update();
    if (currentLevel === 3) {
        GlitchManager.draw(bgImg4);
    }

    updateGameState();
}

function updateGame() {

    if (gameState !== "PLAY") return;

    handlePlayerMovement();
    handleShooting();


    spawnEnemies();

    updateObjects();
    updateTimer();

    checkProgress();
    checkGameOver();
}
