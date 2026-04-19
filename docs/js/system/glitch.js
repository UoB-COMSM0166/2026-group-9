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
        if (this.alpha <= 0) return; 
        push();
        tint(255, this.alpha);
        let jitterX = random(-3, 3);
        let jitterY = random(-3, 3);
        imageMode(CENTER); // 確保對齊
        image(img, width/2 + jitterX, height/2 + jitterY, width * 0.8, (img.height/img.width) * (width * 0.8));
        noTint();
        pop();
    }
};