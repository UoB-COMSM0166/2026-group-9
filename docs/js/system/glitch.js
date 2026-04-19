// js/glitch.js
const GlitchManager = {
    alpha: 0,
    isActive: false,
    speed: 15, // 稍微調慢一點，看起來會更像電腦錯亂

    toggle: function(status) {
        this.isActive = status;
    },

    update: function() {
        if (this.isActive) {
            if (this.alpha < 255) this.alpha += this.speed;
        } else {
            if (this.alpha > 0) this.alpha -= this.speed;
        }
    },

    // 這個 draw 已經做得很棒了，會自己處理抖動和透明度
    draw: function(img) {
    // 1. 偵錯：先確認圖片有沒有載入成功
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
    imageMode(CENTER);
    image(img, width/2 + jitterX, height/2 + jitterY, width * 0.8, (img.height/img.width) * (width * 0.8));
    noTint();
    pop();
}
}