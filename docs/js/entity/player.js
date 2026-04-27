

function resetPlayer() {
    let size;
    if(currentLevel==1) 
    {
        size=75;
    }
    else if(currentLevel==2)
    {
        size=90;
    }
    else if(currentLevel==3)
    {
        size=160;
    }
    else size=80;
    player ={
        x: WORLD_W / 2,
        y: WORLD_H / 2,
        size: size,
    
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
    

    let imgToDraw = playerImg;
    if (currentLevel === 2) {
        imgToDraw = playerImg2;
    } else if (currentLevel === 3) {
        imgToDraw = playerImg3;
    }
    
    if (!imgToDraw) return;




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
