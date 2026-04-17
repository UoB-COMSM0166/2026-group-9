let currentPlayingBGM = null;

function playStageBGM(newBGM){
    if(currentPlayingBGM == newBGM) return;

    if(currentPlayingBGM && currentPlayingBGM.isPlaying()){
        currentPlayingBGM.stop();
}
    currentPlayingBGM = newBGM;
    if(currentPlayingBGM){
        currentPlayingBGM.loop();
        currentPlayingBGM.setVolume(0.5);
    }
}