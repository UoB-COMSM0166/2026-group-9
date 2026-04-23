
function showStartMenuScreen()
{
    if(mainMenuBg)
    {
        image(mainMenuBg,0,0,width,height);
    }
    else
    {
        background(12);
    }

    push();
    noStroke();
    fill(0, 120);          
    rect(width * (2/3-0.05) , 0, width / 3, height);
    pop();
    push();
    textAlign(RIGHT,CENTER);

    fill(255);
    textSize(44);
    text("Kill That Virus", width-88, height*0.28);
    textSize(16);
    fill(210);
    text("ver 0.1", width-200, height*0.36);
    pop();

    const btns = getStartMenuButtons();
    for (const b of btns) drawButton(b);
}

function getStartMenuButtons() {
    const w = 300;
    const h = 80;
    const gap = 22;
    const x = width-80-w;
    const y1 = height*0.48;
    const y2 = y1+h+gap;

    return [
        { x, y: y1, w, h, label: "Start", onClick: () => { gameState = "MODE_SELECT"; } },
        { x, y: y2, w, h, label: "How to Play", onClick: () => { gameState = "HELP"; } }
    ];
}

function showHelpScreen() {
    background(10);

    push();
    fill(255);
    textAlign(CENTER, TOP);
    textSize(34);
    text("How to Play", width / 2, height * 0.10);
    pop();

    const panelX = width * 0.12;
    const panelY = height * 0.22;
    const panelW = width * 0.76;
    const panelH = height * 0.46;

    push();
    noStroke();
    fill(30);
    rect(panelX, panelY, panelW, panelH, 18);
    stroke(120);
    noFill();
    rect(panelX, panelY, panelW, panelH, 18);

    fill(235);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(18);

    const lines = [
        "Move: W A S D",
        "Shoot: Hold Left Mouse Button (auto-fire)",
        "Skills / Items:",
        "  Q: Switch fire mode (single / spread)",
        "  E: Shield (cooldown)",
        "  F: Use medkit (heal)",
        "",
        'Tip: If the controls become "inverted/confused", the thermometer on the right turns blue.'
    ];

    let tx = panelX + 26;
    let ty = panelY + 22;
    const lh = 24;
    for (const s of lines) {
        text(s, tx, ty);
        ty += lh;
    }
    pop();

    const btns = getHelpButtons();
    for (const b of btns) drawButton(b);
}

function getHelpButtons() {
    const w = 260;
    const h = 64;
    const x = width / 2 - w / 2;
    const y = height * 0.74;
    return [{ x, y, w, h, label: "Back", onClick: () => { gameState = "START"; } }];
}

function showModeSelectScreen() {
    if (mainMenuBg) {
        image(mainMenuBg, 0, 0, width, height);
    } else {
        background(12);
    }
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(34);
    text("Select Mode", width / 2, height * 0.22);
    textSize(16);
    fill(210);
    text("Story: clear stages | Roguelike: endless survival + choose 1 of 3 buffs", width / 2, height * 0.30);
    pop();

    const btns = getModeSelectButtons();
    for (const b of btns) drawButton(b);
}

function getModeSelectButtons() {
    const w = 420;
    const h = 70;
    const gap = 22;
    const x = width / 2 - w / 2;
    const y1 = height * 0.42;
    const y2 = y1 + h + gap;
    const y3 = y2 + h + gap;

    return [
        { x, y: y1, w, h, label: "Story Mode", onClick: () => restartStoryFromLevel1() },
        { x, y: y2, w, h, label: "Roguelike Mode", onClick: () => startRoguelikeMode() },
        { x, y: y3, w, h, label: "Back", onClick: () => { gameState = "START"; } }
    ];
}

function uiHandleStartMenusClick() {
    let btns = null;
    if (gameState === "START") btns = getStartMenuButtons();
    else if (gameState === "HELP") btns = getHelpButtons();
    else if (gameState === "MODE_SELECT") btns = getModeSelectButtons();
    if (!btns) return false;

    for (const b of btns) {
        if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
            b.onClick();
            return true;
        }
    }
    return false;
}
