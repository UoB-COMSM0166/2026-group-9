let comicImages = []; // 存放10張圖
let currentComicPage = 0;
let comicFadeAlpha = 0; // 控制黑色遮罩透明度
let isFading = false; // 是否正在轉場中
let comicActive = false; // 漫畫模式是否啟動
let endingBGM; // 結尾音樂

function preload() {
    // 載入 10 張圖片，假設檔名是 comic0.png 到 comic9.png
    for (let i = 0; i < 10; i++) {
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); // 請確保路徑正確
}

function draw() {
    if (gameState === "WIN") {
        showComicBook();
    }
}

function showComicBook() {
    background(0); // 漫畫底色為黑
    
    // 1. 顯示目前的漫畫頁面
    let img = comicImages[currentComicPage];
    if (img) {
        let imgW = width * 0.8; // 縮放到螢幕 80% 寬
        let imgH = (img.height / img.width) * imgW;
        imageMode(CENTER);
        image(img, width / 2, height / 2, imgW, imgH);
    }

    // 2. 處理淡入淡出 (黑色遮罩)
    if (comicFadeAlpha > 0) {
        fill(0, comicFadeAlpha);
        noStroke();
        rectMode(CORNER);
        rect(0, 0, width, height);
        
        comicFadeAlpha -= 4; 
    }

    // 3. 提示文字
    fill(255, 150);
    textAlign(CENTER);
    textSize(16);
    text("Left Click: Next | Right Click: Previous", width / 2, height - 30);
}

function mousePressed() {
    if (gameState === "WIN") {
    // 使用者點了第一下，聲音就合法了
    userStartAudio(); // p5.js 專門用來處理瀏覽器權限的指令
    if (endingBGM && !endingBGM.isPlaying()) {
        endingBGM.loop();
    }
}
    if (gameState === "WIN") {
        if (mouseButton === LEFT) {
            // 只要還沒到最後一張 (index 9)，就加 1
            if (currentComicPage < 9) { 
                currentComicPage++;
                comicFadeAlpha = 100; // 翻頁時讓畫面閃一下黑，更有翻頁感
            } else {
                // 已經在最後一張了，可以執行回到主選單的邏輯
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