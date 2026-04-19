let enemyImages = {}; 

function preload() {
    preloadAssets();
    playerImg = loadImage('asset/role/主角01.png');
    playerImg2 = loadImage('asset/role/主角02.png');
    playerImg3 = loadImage('asset/role/主角03.png');
    bulletImg = loadImage('asset/bullet/bullet.png'); 
    //new add for image
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
    GlitchManager.toggle(true);
    GlitchManager.update(); 
    GlitchManager.draw(bgImg4);
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
