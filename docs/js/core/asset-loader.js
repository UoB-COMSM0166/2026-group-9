function preloadAssets() {
    bgImg1 = loadImage('asset/image/background/01.png');
    bgImg2 = loadImage('asset/image/background/02.png');
    bgImg3 = loadImage('asset/image/background/03.png');
    bgImg4 = loadImage('asset/image/background/04.png');

    bgm01 = loadSound('./asset/BGM/Level01.mp3');
    bgm02 = loadSound('./asset/BGM/Level02.mp3');
    bgm03 = loadSound('./asset/BGM/Level03.mp3');
    bgmmenu = loadSound('./asset/BGM/StartMenu.mp3');

    for (let i = 0; i < 10; i++) {
        comicImages[i] = loadImage(`asset/image/Comic/C${i}.png`);
    }
    endingBGM = loadSound('asset/BGM/Ending.mp3'); 
}
