let playerImg; // new add for image
let enemyImages={};
// --- 這裡整合了你所有的全域變數，確保它們在程式一開始就存在 ---

// 1. 圖片與資源變數
let playerImg, playerImg2, playerImg3, bulletImg;
let bgImg1, bgImg2, bgImg3, bgImg4;
let enemyImages = {};
let comicImages = []; // 重要！這行如果沒宣告，上面的 for 迴圈就會崩潰

// 2. 音效變數
let bgm01, bgm02, bgm03, bgmmenu, endingBGM, enemyDeathSound;

// 3. 其他全域狀態 (如果有的話)
// let currentLevel, systemErrorOccurred; // 如果你這些變數也在用，記得確保它們有宣告

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
}

function setup() {
    createCanvas(960, 540);
    resetPlayer();
}


function draw() {
    background(40);

    sceneSwitch();

    updateGameState();

    updateGameProgress();

    GlitchManager.update();

    drawMap();

    drawEntities();
    
    if (currentLevel === 3){
        GlitchManager.draw(bgImg4);
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

function drawMap() {
    if (currentLevel === 1) {
        image(bgImg1, 0, 0, width, height);
    } else if (currentLevel === 2) {
        image(bgImg2, 0, 0, width, height);
    } else if (currentLevel === 3) {
        image(bgImg3, 0, 0, width, height);
    }
}

function drawEntities() {
    // 把你原本分散在 draw() 裡面畫玩家、敵人的代碼放進這裡
    player.draw(); 
    
    for (let enemy of enemies) {
        enemy.draw();
    }
    
    for (let bullet of bullets) {
        bullet.draw();
    }
    
    // 如果你有其他的 UI 或道具，也可以放在這裡
}
