let playerImg; 
let enemyImages = {};  
  
function preload() {  
  preloadAssets();  
  playerImg = loadImage('asset/role/设计拟人化圆形并保存.png');  
  
  for(let i = 0; i < 10; i++){  
    comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);  
  }  
  endingBGM = loadSound('asset/BGM/Ending.mp3'); 
  enemyDeathSound = loadSound('asset/audio/enemy-death.wav')  
  
  enemyImages = {};  
  enemyImages.enemy1 = loadImage('asset/enemy/enemy1.png');  
  enemyImages.enemy2 = loadImage('asset/enemy/enemy2.png');  
  enemyImages.enemy3 = loadImage('asset/enemy/enemy3.png');  
  enemyImages.enemy4 = loadImage('asset/enemy/enemy4.png');  
  enemyImages.enemy5 = loadImage('asset/enemy/enemy5.png');  
}  
  
function setup() {  
  createCanvas(960, 540);  
  resetPlayer();  
}  
  
function draw() {  
  background(40);  
  sceneSwitch();  
}  

function mousePressed() {
  if (gameState === "MENU") {
    checkStartMenuClick();
  } else if (gameState === "WIN") {
    handleVictoryClick(); 
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