let bgImg1, bgImg2;
let player;
let bullets = [];
let enemies = [];
let levelDuration = 15;
// let timer = 45;
let timer = 15;
let killCount = 0;
let currentLevel = 1;
let gameState = "PLAY";
let lastShotTime = 0;
let fireRate = 200; // 射擊間隔200毫秒