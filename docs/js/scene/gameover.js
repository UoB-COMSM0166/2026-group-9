function showGameOverScreen() {
    background(10);

    if (currentPlayingBGM !== null) {
        stopAllBGM();
        currentPlayingBGM = null;
    }

    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(44);
    text("CELL DESTROYED", width / 2, height * 0.22);
    pop();

    const btns = getGameOverButtons();
    for (const b of btns) drawButton(b);
}

function getGameOverButtons() {
    const w = 360;
    const h = 70;
    const gap = 24;
    const x = width / 2 - w / 2;
    const y1 = height * 0.60;
    const y2 = y1 + h + gap;

    return [
        {
            x, y: y1, w, h,
            label: "Restart (Level 1)",
            onClick: () => restartStoryFromLevel1()
        },
        {
            x, y: y2, w, h,
            label: "Back to Start",
            onClick: () => {
                stopAllBGM();
                currentPlayingBGM = null;
                gameState = "START";
            }
        }
    ];
}

function handleGameOverMousePressed() {
    const btns = getGameOverButtons();
    for (const b of btns) {
        if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.y && mouseY <= b.y + b.h) {
            b.onClick();
            return true;
        }
    }
    return false;
}
