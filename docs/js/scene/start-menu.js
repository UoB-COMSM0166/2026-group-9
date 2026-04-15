function drawStartMenu() {
  background(30);
  textAlign(CENTER, CENTER);
  
  // 绘制标题
  fill(255, 100, 100);
  textSize(64);
  textStyle(BOLD);
  text("Kill that Virus", width / 2, height / 3);
  
  // 按钮位置与大小
  let btnX = width / 2;
  let btnY = height / 2 + 60;
  let btnW = 220;
  let btnH = 70;
  
  // 检测鼠标是否悬停在按钮上以改变外观
  let isHover = (mouseX > btnX - btnW/2 && mouseX < btnX + btnW/2 && 
                 mouseY > btnY - btnH/2 && mouseY < btnY + btnH/2);
                 
  if (isHover) {
    fill(120, 255, 120); // 悬停时变为绿色
    cursor(HAND);
  } else {
    fill(255);
    cursor(ARROW);
  }
  
  // 绘制按钮矩形
  rectMode(CENTER);
  noStroke();
  rect(btnX, btnY, btnW, btnH, 15);
  
  // 按钮文字
  fill(0);
  textSize(32);
  text("START GAME", btnX, btnY);
}

/**
 * 检查是否点击了开始按钮
 * 需在 sketch.js 的 mousePressed() 中调用
 */
function checkStartMenuClick() {
  if (gameState === "MENU") {
    let btnX = width / 2;
    let btnY = height / 2 + 60;
    let btnW = 220;
    let btnH = 70;
    
    if (mouseX > btnX - btnW/2 && mouseX < btnX + btnW/2 && 
        mouseY > btnY - btnH/2 && mouseY < btnY + btnH/2) {
      gameState = "PLAY";
      cursor(ARROW);
    }
  }
}