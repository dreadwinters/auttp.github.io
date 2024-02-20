const audioSources = ["1.mp3", "2.mp3"];
const player = document.getElementById("player");
function playAudio() {
    let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
    player.src = audioSource;
};
player.addEventListener('ended', playAudio);
playAudio();
