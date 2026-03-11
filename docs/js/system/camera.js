function getCameraOffset() {
    // 攝影機跟隨邏輯
    let camX = constrain(width / 2 - player.x, -(WORLD_W - width), 0);
    let camY = constrain(height / 2 - player.y, -(WORLD_H - height), 0);
    return {x: camX, y: camY};
}
