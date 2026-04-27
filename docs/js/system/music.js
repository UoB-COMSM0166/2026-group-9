let currentPlayingBGM = null;

function playStageBGM(newBGM) {
    if (!newBGM) return;

    if (currentPlayingBGM === newBGM && newBGM.isPlaying()) return;

    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }

    if (currentPlayingBGM && currentPlayingBGM.isPlaying()) {
        currentPlayingBGM.stop();
    }

    currentPlayingBGM = newBGM;
    currentPlayingBGM.setVolume(0.6);
    currentPlayingBGM.loop();
}

function stopAllBGM() {
    if (bgmmenu) bgmmenu.stop();
    if (bgm01) bgm01.stop();
    if (bgm02) bgm02.stop();
    if (bgm03) bgm03.stop();
    currentPlayingBGM = null;
}
