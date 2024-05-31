const buttonIcon = document.getElementById("button_icon");
buttonIcon.addEventListener("click", () => playPause() )

let play = false;

function playPause() {
    if(play) {
        document.getElementById("song").play();
        buttonIcon.src = "./assets/images/pause_button.png";
    } else {
        document.getElementById("song").pause();
        buttonIcon.src = "./assets/images/play_button.png";
    }
    play = !play;
}


