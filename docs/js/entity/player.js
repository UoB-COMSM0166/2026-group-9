
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

function drawPlayer() {
    if (!player || !playerImg) return;

    image(
        playerImg,
        player.x - player.size ,
        player.y - player.size / 2,
        player.size,
        player.size
    );
}
