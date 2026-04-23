const GlitchManager = {
    alpha: 0,
    isActive: false,
    speed: 15,

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
        if (!img || this.alpha <= 0) return;

        push();
        tint(255, this.alpha);
        let jitterX = random(-3, 3);
        let jitterY = random(-3, 3);
        imageMode(CORNER);
        image(img, jitterX, jitterY, width, height);
        noTint();
        pop();
    },

    checkStatus: function(timer, level) {
        if (level !== 3) {
            this.toggle(false);
            return;
        }

        let isGlitchTime = (timer <= 50 && timer > 45) || 
                           (timer <= 30 && timer > 25) || 
                           (timer <= 15 && timer > 10);

        this.toggle(isGlitchTime);
    }
};
