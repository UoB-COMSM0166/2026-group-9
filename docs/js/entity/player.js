
// 你的原有重置函数，完全不动
function resetPlayer() {
    player = {
        x: WORLD_W / 2, 
        y: WORLD_H / 2, 
        size: 100, // 这个数值控制图像显示大小，不合适可以调
        hp: 80
    };
}

// 【核心新增】玩家绘制函数（替换绿色圆圈）
function drawPlayer() {
    if (!player || !playerImg) return; // 防止报错


    // 图像默认从左上角画，减去size/2让中心对齐玩家坐标
    image(
        playerImg,
        player.x - player.size / 2,
        player.y - player.size / 2,
        player.size,
        player.size
    );
}