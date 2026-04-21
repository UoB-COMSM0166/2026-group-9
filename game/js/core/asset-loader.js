let bgm01, bgm02, bgm03, bgmmenu;

function preloadAssets() {
    bgImg1 = loadImage('asset/image/background/01.png');
    bgImg2 = loadImage('asset/image/background/02.png');
    bgImg3 = loadImage('asset/image/background/03.png');

    bgm01 = loadSound('./asset/BGM/Level01.mp3');
    bgm02 = loadSound('./asset/BGM/Level02.mp3');
    bgm03 = loadSound('./asset/BGM/Level03.mp3');
    bgmmenu = loadSound('./asset/BGM/StartMenu.mp3');
}
