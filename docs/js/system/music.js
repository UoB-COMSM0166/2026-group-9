let currentPlayingBGM = null;

function playStageBGM(newBGM){
    console.log("playStageBGM called with newBGM:", newBGM);
    if(!newBGM){
        console.error("empty BGM");return;}
    if(currentPlayingBGM == newBGM) return;

    if(currentPlayingBGM && currentPlayingBGM.isPlaying()){
        console.log("Stopping current BGM");
        currentPlayingBGM.stop();
}
    currentPlayingBGM = newBGM;
    if(currentPlayingBGM){
        console.log("Playing new BGM");
        currentPlayingBGM.play();
        currentPlayingBGM.setVolume(1.0);
    }
    else{
        console.log("No BGM to play");
    }
}