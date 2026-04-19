let enemyImages = {}; 
let comicImages = []; 

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
