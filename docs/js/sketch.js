let playerImg; // new add for image
let enemyImages={};
let shieldImg; 
function preload() {
    preloadAssets();
    playerImg = loadImage('asset/role/主角01.png');
    playerImg2 = loadImage('asset/role/主角02.png');
    playerImg3 = loadImage('asset/role/主角03.png');
    bulletImg = loadImage('asset/bullet/bullet.png'); 
    //new add for image
    for(let i = 0; i < 10; i++){
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); 
    enemyDeathSound = loadSound('asset/audio/enemy-death.wav');

    enemyImages = {};
    enemyImages.enemy1 = loadImage('asset/enemy/基礎敵人.png');
    enemyImages.enemy2 = loadImage('asset/enemy/快跑敵人.png');
    enemyImages.enemy3 = loadImage('asset/enemy/坦克敵人.png');
    enemyImages.enemy4 = loadImage('asset/enemy/分裂敵人.png');
    enemyImages.enemy5 = loadImage('asset/enemy/游移敵人.png');
 //new add
    shieldImg = loadImage('asset/bullet/淡黄色手绘蜂窝护盾设计.png');
}

function setup() {
    createCanvas(1080, 660);
    resetPlayer();
}


function draw() {
    background(40);

    sceneSwitch();

    updateGameState();
}

function updateGame() {
    // Buff 三選一時，暫停遊戲更新（畫面在 scene-manager 中仍會繪製）
    if (gameState !== "PLAY") return;

    handlePlayerMovement();
    handleShooting();


    spawnEnemies();

    updateObjects();
    updateTimer();

    checkProgress();
    checkGameOver();
}