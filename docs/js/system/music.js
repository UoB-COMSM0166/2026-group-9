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
        currentPlayingBGM.setVolume(1.0); 
        currentPlayingBGM.loop();        
    } else {
        console.log("No BGM object found to play");
    }
}