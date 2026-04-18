console.log("🚀 js/sketch.js 文件已加载！");



function preload() {
    preloadAssets();
    playerImgs={};//new add for image
    playerImgs[1]= loadImage('asset/role/设计拟人化圆形并保存.png');
    playerImgs[2]= loadImage('asset/role/第二关player.png');
    playerImgs[3]= loadImage('asset/role/第三关player.png');

    //new add for image
    for(let i = 0; i < 10; i++){
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); // 請確保路徑正確
    enemyDeathSound = loadSound('asset/audio/enemy-death.wav');

    enemyImages = {};
  // 加载5种敌人的图片
    enemyImages.enemy1 = loadImage('asset/enemy/enemy1.png');
    enemyImages.enemy2 = loadImage('asset/enemy/enemy2.png');
    enemyImages.enemy3 = loadImage('asset/enemy/enemy3.png');
    enemyImages.enemy4 = loadImage('asset/enemy/enemy4.png');
    enemyImages.enemy5 = loadImage('asset/enemy/enemy5.png');
 //new add
    console.log("✅ preload 执行完毕！");
}

function setup() {
    console.log("🎮 setup 开始执行");
    createCanvas(960, 540);
    resetPlayer();

    currentPlayerImg=playerImgs[1];//new add for image
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

function updatePlayerSprite() {
  currentPlayerImg = playerImgs[currentLevel] || playerImgs[1];
}