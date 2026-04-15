let playerImg; // new add for image
let enemyImages={};

function preload() {
    preloadAssets();
    playerImg = loadImage('asset/role/设计拟人化圆形并保存.png');
    //new add for image
    for(let i = 0; i < 10; i++){
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); // 請確保路徑正確
    enemyDeathSound = loadSound('asset/audio/enemy-death.wav')

    enemyImages = {};
  // 加载5种敌人的图片
    enemyImages.enemy1 = loadImage('asset/enemy/enemy1.png');
    enemyImages.enemy2 = loadImage('asset/enemy/enemy2.png');
    enemyImages.enemy3 = loadImage('asset/enemy/enemy3.png');
    enemyImages.enemy4 = loadImage('asset/enemy/enemy4.png');
    enemyImages.enemy5 = loadImage('asset/enemy/enemy5.png');
 //new add
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