let $ = document;
let songFile = $.querySelector(".song_file");
let musicEl = $.querySelectorAll(".music");
let allSongs = [
  { path: "./media/Audio/2PacRemix.mp3", isPlaying: false },
  { path: "./media/Audio/Ghazi Mano Doost Dasht.mp3", isPlaying: false },
  { path: "./media/Audio/Rooz.mp3", isPlaying: false },
  { path: "./media/Audio/TabrizDarMeh.mp3", isPlaying: false },
];
musicEl.forEach(function (item, index) {
  item.addEventListener("click", function () {
    if (item.classList.contains("music1")) {
      songFile.src = allSongs[0]["path"];
      songFile.play();
    } else if (item.classList.contains("music2")) {
      songFile.src = allSongs[1]["path"];
      songFile.play();
    } else if (item.classList.contains("music3")) {
      songFile.src = allSongs[2]["path"];
      songFile.play();
    } else {
      songFile.src = allSongs[3]["path"];
      songFile.play();
    }
    if (allSongs[index]["isPlaying"]) {
      allSongs[index]["isPlaying"] = false;
      songFile.pause();
    } else {
      allSongs[index]["isPlaying"] = true;
    }
  });
});
