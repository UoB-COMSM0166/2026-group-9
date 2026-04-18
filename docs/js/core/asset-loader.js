// 全局变量声明（只在此处声明一次）
let playerImgs = {};
let enemyImages = {};
let comicImages = [];
let currentLevel = 1;
let currentPlayerImg;
let endingBGM;
let enemyDeathSound;
let bgImg1, bgImg2, bgImg3;
let gameState = "PLAY";
let progress = 0;
let shakeTimer = 0;
let redMaskAlpha = 0;



function preload() {
    console.log("✅ asset-loader 的 preload 开始执行");
    preloadAssets();

    playerImgs = {};
    playerImgs[1] = loadImage('asset/role/设计拟人化圆形并保存.png');
    playerImgs[2] = loadImage('asset/role/第二关player.png');
    playerImgs[3] = loadImage('asset/role/第三关player.png');

    comicImages = [];
    for (let i = 0; i < 10; i++) {
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }

    endingBGM = loadSound('asset/BGM/Ending.mp3');
    enemyDeathSound = loadSound('asset/audio/enemy-death.wav');

    enemyImages = {};
    enemyImages.enemy1 = loadImage('asset/enemy/enemy1.png');
    enemyImages.enemy2 = loadImage('asset/enemy/enemy2.png');
    enemyImages.enemy3 = loadImage('asset/enemy/enemy3.png');
    enemyImages.enemy4 = loadImage('asset/enemy/enemy4.png');
    enemyImages.enemy5 = loadImage('asset/enemy/enemy5.png');
}

function preloadAssets() {
    // 🔥 修复：变量已在顶部定义，这里直接加载
    bgImg1 = loadImage('asset/image/background/01.png');
    bgImg2 = loadImage('asset/image/background/02.png');
    bgImg3 = loadImage('asset/image/background/03.png');
}

function setup() {
    createCanvas(960, 540);
    resetPlayer();
    currentPlayerImg = playerImgs[1];
}

function draw() {
    background(40);
    sceneSwitch();
}

function sceneSwitch() {
    if (gameState === "PLAY") {
        if (progress >= 0 && progress < 30) {
            currentLevel = 1;
        } else if (progress >= 30 && progress < 60) {
            currentLevel = 2;
        } else if (progress >= 60) {
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

    if (redMaskAlpha > 0) {
        fill(255, 0, 0, redMaskAlpha);
        rect(0, 0, width, height);
        redMaskAlpha -= 10;
    }
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

// -------------- 【临时占位函数：避免报错】--------------
// 你原来的代码里有这些函数调用，但没贴出来，我先加个空的占位
function resetPlayer() {}
function handlePlayerMovement() {}
function handleShooting() {}
function spawnEnemies() {}
function updateObjects() {}
function updateTimer() {}
function checkProgress() {}
function checkGameOver() {}
function drawWorld() {}
function drawUI() {}
function showComicBook() {}
function showEndScreen(text) {
    background(0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(text, width/2, height/2);
}