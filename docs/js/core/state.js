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

let gameState = "START";


let gameMode = "STORY"; // "STORY" | "ROGUELIKE"

let lastShotTime = 0;

let baseFireRate = 200; // ms
let fireRateReduction = 0;
let bulletDamageBonus = 0; // +damage
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


let enemyDeathSound;

// --- Roguelike runtime ---
let rogue = {
    survivedFrames: 0,
    nextBuffAtSec: 20,
    buffChoices: null,
    buffOverlayHover: -1
};

// UI state
let uiThermometerCold = false;