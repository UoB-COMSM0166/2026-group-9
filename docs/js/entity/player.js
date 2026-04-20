
// 你的原有重置函数，完全不动
function resetPlayer() {
    player = {
        x: WORLD_W / 2,
        y: WORLD_H / 2,
        size: 100,
        hp: 80,
        maxHp: 80,
        speed: 4
    };

    weaponMode = "normal";

    shieldOn = false;
    shieldTimer = 0;
    shieldCDLeft = 0;

    medkits = 2;
}

/*function drawPlayer() {
    if (!player || !playerImg) return;

    image(
        playerImg,
        player.x - player.size ,
        player.y - player.size / 2,
        player.size*2,
        player.size
    );
}
    */
function drawPlayer() {
    if (!player) return;
    
    // 根据关卡选择对应图片
    let imgToDraw = playerImg;  // 默认第一关
    if (currentLevel === 2) {
        imgToDraw = playerImg2;
    } else if (currentLevel === 3) {
        imgToDraw = playerImg3;
    }
    
    if (!imgToDraw) return;  // 防止图片未加载

    // 以 player.x / player.y 作为“角色中心点”，确保：
    // - 镜头跟随时角色出现在画面正中央
    // - 贴图位置与子弹发射位置（同为 player.x / player.y）严格一致
    push();
    imageMode(CENTER);
    image(
        imgToDraw,
        player.x,
        player.y,
        player.size * 2,
        player.size
    );
    pop();
}
