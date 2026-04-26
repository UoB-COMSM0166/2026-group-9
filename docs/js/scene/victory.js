let comicImages = []; 
let currentComicPage = 0;
let comicFadeAlpha = 0; 
let isFading = false; 
let comicActive = false; 
let endingBGM; 

function showComicBook() {
    background(0); 

    if (currentPlayingBGM !== null) { 
            stopAllBGM(); 
            currentPlayingBGM = null;
        }

    // IMPORTANT: keep drawing state local (imageMode, rectMode, etc.)
    push();
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
    pop();
}

function mousePressed() {
    if (gameState === "START" || gameState === "HELP" || gameState === "MODE_SELECT") {
        userStartAudio();
        uiHandleStartMenusClick();
        return;
    }

    // WIN: 漫畫翻頁
    if (gameState === "WIN") {
        userStartAudio();
        if (endingBGM && !endingBGM.isPlaying()) {
            endingBGM.play();
        }

        if (mouseButton === LEFT) {
            if (currentComicPage < 9) {
                currentComicPage++;
                comicFadeAlpha = 100;
            } else {
                stopAllBGM();
                gameState = "POST_COMIC";
            }
        } else if (mouseButton === RIGHT) {
            if (currentComicPage > 0) currentComicPage--;
        }
        return;
    }

    if (gameState === "POST_COMIC") {
        const btns = getPostComicButtons();
        for (const b of btns) {
            if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
                b.onClick();
                return;
            }
        }
        return;
    }

    if (gameState === "BUFF_SELECT") {
        if (!rogue.buffChoices) return;
        const cards = getBuffCardsLayout();
        for (let i = 0; i < cards.length; i++) {
            const c = cards[i];
            if (mouseX >= c.x && mouseX <= c.x + c.w && mouseY >= c.y && mouseY <= c.y + c.h) {
                applyBuffChoice(i);
                return;
            }
        }
    }
}

function triggerGameWin() {
    userStartAudio
    gameState = "WIN";
    currentComicPage = 0;
    comicFadeAlpha = 255; 
    
    // 播放音樂
    if (endingBGM && !endingBGM.isPlaying()) {
        endingBGM.play(); 
    }
}

document.oncontextmenu = function() {
    if (gameState === "WIN") return false;
}

// --- Buff system (Roguelike) ---
function triggerBuffSelection() {
    rogue.buffChoices = generateBuffChoices(3);
    gameState = "BUFF_SELECT";
}

function applyBuffChoice(index) {
    const choice = rogue.buffChoices?.[index];
    if (!choice) return;
    choice.apply();
    rogue.buffChoices = null;
    gameState = "PLAY";
}

function generateBuffChoices(count) {
    const pool = getBuffPool();
    const picked = [];

    const seenValuesById = new Map(); // id -> Set(valueKey)

    while (picked.length < count) {
        const proto = random(pool);
        const variant = proto.rollVariant();

        const key = variant.valueKey;
        if (!seenValuesById.has(proto.id)) seenValuesById.set(proto.id, new Set());
        const set = seenValuesById.get(proto.id);
        if (set.has(key)) continue;
        set.add(key);

        picked.push(variant);
    }

    return picked;
}

function getBuffPool() {
    return [
        {
            id: "dmg",
            rollVariant: () => {
                const add = random([1, 2, 3]);
                return {
                    id: "dmg",
                    valueKey: `+${add}`,
                    title: `Damage +${add}`,
                    desc: "Increase bullet damage.",
                    apply: () => { bulletDamageBonus += add; }
                };
            }
        },
        {
            id: "firerate",
            rollVariant: () => {
                const reduce = random([20, 40, 60]);
                return {
                    id: "firerate",
                    valueKey: `-${reduce}`,
                    title: `Fire Rate -${reduce}ms`,
                    desc: "Shoot faster (lower cooldown).",
                    apply: () => { fireRateReduction += reduce; }
                };
            }
        },
        {
            id: "maxhp",
            rollVariant: () => {
                const add = random([10, 15, 20]);
                return {
                    id: "maxhp",
                    valueKey: `+${add}`,
                    title: `Max HP +${add}`,
                    desc: "Increase max HP and heal the same amount.",
                    apply: () => {
                        player.maxHp += add;
                        player.hp = min(player.maxHp, player.hp + add);
                    }
                };
            }
        },
        {
            id: "speed",
            rollVariant: () => {
                const add = random([0.5, 1.0, 1.5]);
                return {
                    id: "speed",
                    valueKey: `+${add}`,
                    title: `Move Speed +${add}`,
                    desc: "Move faster.",
                    apply: () => { player.speed = (player.speed || 4) + add; }
                };
            }
        },
        {
            id: "medkit",
            rollVariant: () => {
                const add = random([1, 2]);
                return {
                    id: "medkit",
                    valueKey: `+${add}`,
                    title: `Medkits +${add}`,
                    desc: "Gain extra medkits.",
                    apply: () => { medkits += add; }
                };
            }
        }
    ];
}