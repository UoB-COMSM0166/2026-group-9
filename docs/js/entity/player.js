
// 你的原有重置函数，完全不动
function resetPlayer() {
    player = {
        x: WORLD_W / 2,
        y: WORLD_H / 2,
        size: 100,
        hp: 80,
        maxHp: 80
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
    
    image(
        imgToDraw,
        player.x - player.size,
        player.y - player.size / 2,
        player.size * 2,
        player.size
    );
}
