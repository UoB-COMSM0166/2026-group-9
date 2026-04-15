let bgImg1, bgImg2, bgImg3;
let player;
let bullets = [];
let enemies = [];
let particles =[];
let levelDuration = 15;
// let timer = 45;
let timer = 15;
let killCount = 0;
let currentLevel = 1;
let gameState = "PLAY";
let lastShotTime = 0;
let fireRate = 200; // 射擊間隔200毫秒
let shakeTimer = 0;
let redMaskAlpha = 0;

// weapon
let weaponMode = "normal"; // normal / spread

// shield
let shieldOn = false;
let shieldTimer = 0;
let shieldTime = 120;
let shieldCD = 300;
let shieldCDLeft = 0;

// medkit
let medkits = 2;
let healValue = 5;

// key press control
let qDown = false;
let eDown = false;
let fDown = false;
