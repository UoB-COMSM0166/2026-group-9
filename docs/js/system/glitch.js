// js/glitch.js

const GlitchManager = {
    alpha: 0,
    isActive: false,
    speed: 20, 
    

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


    draw: function(img) {
        if (this.alpha <= 0) return; 

        push();
        tint(255, this.alpha);
        
        let jitterX = random(-3, 3);
        let jitterY = random(-3, 3);
        
        // 繪製圖片
        image(img, jitterX, jitterY, width, height);
        
        noTint();
        pop();
    }
};