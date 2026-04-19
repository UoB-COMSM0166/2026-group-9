// js/glitch.js
const GlitchManager = {
    alpha: 0,
    isActive: false,
    speed: 15, // 稍微調慢一點，看起來會更像電腦錯亂

    toggle: function(status) {
        console.log("DEBUG: GlitchManager 收到狀態請求，現在設定為:", status);
        this.isActive = status;
    },

    update: function() {
        if (this.isActive) {
            if (this.alpha < 255) this.alpha += this.speed;
        } else {
            if (this.alpha > 0) this.alpha -= this.speed;
        }
    },

    draw: function(img) {
    if (!img) {
        console.error("DEBUG: 圖片 img 是空的 (undefined 或 null)！");
        return;
    }
    
    // 2. 偵錯：確認 alpha 值到底是多少
    console.log("DEBUG: GlitchManager alpha 值:", this.alpha);
    
    // 如果 alpha 小於等於 0，那就真的畫不出來
    if (this.alpha <= 0) return; 
    
    push();
    tint(255, this.alpha);
    let jitterX = random(-3, 3);
    let jitterY = random(-3, 3);
    imageMode(CORNER);
    image(img, 0 + jitterX, 0 + jitterY, width, height);
    noTint();
    pop();
}
}