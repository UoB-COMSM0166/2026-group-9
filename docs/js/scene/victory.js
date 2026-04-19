let comicImages = []; 
let currentComicPage = 0;
let comicFadeAlpha = 0; 
let isFading = false; 
let comicActive = false; 
let endingBGM; 

function preload() {
    
    for (let i = 0; i < 10; i++) {
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); 
}

function draw() {
    if (gameState === "WIN") {
        showComicBook();
    }
}

function showComicBook() {
    background(0); 
    
    
    let img = comicImages[currentComicPage];
    if (img) {
        let imgW = width * 0.8; 
        let imgH = (img.height / img.width) * imgW;
        imageMode(CENTER);
        image(img, width / 2, height / 2, imgW, imgH);
    }

    
    if (comicFadeAlpha > 0) {
        fill(0, comicFadeAlpha);
        noStroke();
        rectMode(CORNER);
        rect(0, 0, width, height);
        
        comicFadeAlpha -= 4; 
    }

    
    fill(255, 150);
    textAlign(CENTER);
    textSize(16);
    text("Left Click: Next | Right Click: Previous", width / 2, height - 30);
}

function mousePressed() {
    if (gameState === "WIN") {
    
    userStartAudio(); 
    if (endingBGM && !endingBGM.isPlaying()) {
        endingBGM.loop();
    }
}
    if (gameState === "WIN") {
        if (mouseButton === LEFT) {
            
            if (currentComicPage < 9) { 
                currentComicPage++;
                comicFadeAlpha = 100; 
            } else {
                
                gameState = "MENU";
            }
        } 
        else if (mouseButton === RIGHT) {
            // 只要不是第一張 (index 0)，就減 1
            if (currentComicPage > 0) {
                currentComicPage--;
            }
        }
    }
}

function triggerGameWin() {
    userStartAudio
    gameState = "WIN";
    currentComicPage = 0;
    comicFadeAlpha = 255; // 從全黑開始
    
    // 播放音樂
    if (endingBGM && !endingBGM.isPlaying()) {
        endingBGM.loop(); 
    }
}

document.oncontextmenu = function() {
    if (gameState === "WIN") return false;
}