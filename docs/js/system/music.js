let currentPlayingBGM = null;

function playStageBGM(newBGM) {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }

    console.log("playStageBGM called with newBGM:", newBGM);
    
    if (!newBGM) {
        console.error("Empty BGM parameter.");
        return;
    }

    if (currentPlayingBGM === newBGM && newBGM.isPlaying()) return;

    if (currentPlayingBGM && currentPlayingBGM.isPlaying()) {
        console.log("Stopping current BGM");
        currentPlayingBGM.stop();
    }

    currentPlayingBGM = newBGM;
    
    if (currentPlayingBGM) {
        console.log("Playing new BGM in loop mode");
        currentPlayingBGM.setVolume(0.6);
        currentPlayingBGM.play();        
    } else {
        console.log("No BGM object found to play");
    }
}

function stopAllBGM() {
    if (bgmmenu) bgmmenu.stop();
    if (bgm01) bgm01.stop();
    if (bgm02) bgm02.stop();
    if (bgm03) bgm03.stop();
    
    if (typeof endingBGM !== 'undefined' && endingBGM) {
        endingBGM.stop();
    }
}