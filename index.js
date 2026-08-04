const playBtn = document.querySelector(".play-circle");
const playIcon = playBtn.querySelector("i");
const progressBar = document.querySelector(".progress input");
const volumeBar = document.querySelector(".player-right input");
const heartBtn = document.querySelector(".player-left .fa-heart");
const songImage = document.querySelector(".player-left img");
const songTitle = document.querySelector(".song-details h4");
const songArtist = document.querySelector(".song-details p");
const nextBtn = document.querySelector(".fa-forward-step");
const prevBtn = document.querySelector(".fa-backward-step");
const songs = [
    {
        name: "Blinding Lights",
        artist: "The Weeknd",
        image: "assets/recent4.jpeg"
    },
    {
        name: "Perfect",
        artist: "Ed Sheeran",
        image: "assets/recent5.jpeg"
    },
    {
        name: "After Hours",
        artist: "The Weeknd",
        image: "assets/recent1.jpeg"
    },
    {
        name: "Levitating",
        artist: "Dua Lipa",
        image: "assets/recent3.jpeg"
    },
    {
        name: "Anti-Hero",
        artist: "Taylor Swift",
        image: "assets/recent2.jpeg"
    }
];

let currentSong = 0;
let isPlaying = false;
let progress = 0;
let timer;
playBtn.addEventListener("click", () => {

    isPlaying = !isPlaying;

    if (isPlaying) {

        playIcon.classList.replace("fa-play", "fa-pause");

        timer = setInterval(() => {

            if (progress < 100) {
                progress++;
                progressBar.value = progress;
            }

        }, 400);

    } else {

        playIcon.classList.replace("fa-pause", "fa-play");

        clearInterval(timer);

    }

});
function updateSong(index) {

    songImage.src = songs[index].image;
    songTitle.textContent = songs[index].name;
    songArtist.textContent = songs[index].artist;

    progress = 0;
    progressBar.value = 0;

}
nextBtn.addEventListener("click", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    updateSong(currentSong);

});
prevBtn.addEventListener("click", () => {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    updateSong(currentSong);

});
heartBtn.addEventListener("click", () => {

    heartBtn.classList.toggle("fa-solid");
    heartBtn.classList.toggle("fa-regular");

    if (heartBtn.classList.contains("fa-solid")) {

        heartBtn.style.color = "#1db954";

    } else {

        heartBtn.style.color = "#b3b3b3";

    }

});
volumeBar.value = 80;

volumeBar.addEventListener("input", () => {

    console.log("Volume:", volumeBar.value);

});
progressBar.addEventListener("input", () => {

    progress = progressBar.value;

});
updateSong(currentSong);